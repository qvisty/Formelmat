#!/usr/bin/env python3
"""
TODO-GitHub Issue Synchronization

Scans Git-tracked files for TODO(context): description patterns,
creates GitHub issues for new TODOs, and closes issues for removed TODOs.

Requires: gh CLI installed and authenticated
"""

import subprocess
import hashlib
import json
import os
import re
import sys

CACHE_FILE = os.path.join(os.path.dirname(__file__), "..", "todo-issues.json")
LABEL = "todo-sync"
BLACKLIST_DIRS = {".git", ".next", "node_modules", ".claude", ".planning", "public"}
TODO_PATTERN = re.compile(r"TODO\(([^)]+)\):\s*(.+)")


def run(cmd):
    result = subprocess.run(cmd, capture_output=True, text=True, shell=True)
    return result.stdout.strip(), result.returncode


def get_tracked_files():
    out, _ = run("git ls-files")
    files = []
    for f in out.split("\n"):
        if not f:
            continue
        parts = f.split("/")
        if any(d in BLACKLIST_DIRS for d in parts):
            continue
        files.append(f)
    return files


def find_todos():
    todos = {}
    for filepath in get_tracked_files():
        if not os.path.isfile(filepath):
            continue
        try:
            with open(filepath, "r", encoding="utf-8", errors="ignore") as fh:
                for line_no, line in enumerate(fh, 1):
                    match = TODO_PATTERN.search(line)
                    if match:
                        context = match.group(1).strip()
                        description = match.group(2).strip()
                        hash_key = hashlib.md5(f"{filepath}:{description}".encode()).hexdigest()
                        todos[hash_key] = {
                            "file": filepath,
                            "line": line_no,
                            "context": context,
                            "description": description,
                        }
        except (IOError, UnicodeDecodeError):
            continue
    return todos


def load_cache():
    if os.path.exists(CACHE_FILE):
        with open(CACHE_FILE, "r") as f:
            return json.load(f)
    return {}


def save_cache(cache):
    os.makedirs(os.path.dirname(CACHE_FILE), exist_ok=True)
    with open(CACHE_FILE, "w") as f:
        json.dump(cache, f, indent=2)


def ensure_label():
    run(f'gh label create "{LABEL}" --description "Auto-synced from TODO comments" --color "0E8A16" 2>/dev/null')


def get_active_milestone():
    out, rc = run('gh api repos/:owner/:repo/milestones --jq ".[0].title"')
    return out if rc == 0 and out else None


def create_issue(todo, milestone=None):
    title = f"TODO({todo['context']}): {todo['description']}"
    body = f"**File:** `{todo['file']}` (line {todo['line']})\n\n{todo['description']}\n\n*Auto-created from TODO comment*"
    cmd = f'gh issue create --title "{title}" --body "{body}" --label "{LABEL}"'
    if milestone:
        cmd += f' --milestone "{milestone}"'
    out, rc = run(cmd)
    if rc == 0:
        # Extract issue number from URL
        parts = out.split("/")
        return parts[-1] if parts else None
    return None


def close_issue(issue_number):
    run(f"gh issue close {issue_number}")


def main():
    # Check if gh is available
    _, rc = run("gh --version")
    if rc != 0:
        return

    # Check if we're in a git repo with a remote
    _, rc = run("gh repo view --json name")
    if rc != 0:
        return

    ensure_label()
    cache = load_cache()
    current_todos = find_todos()
    milestone = get_active_milestone()

    # Create issues for new TODOs
    for hash_key, todo in current_todos.items():
        if hash_key not in cache:
            issue_number = create_issue(todo, milestone)
            if issue_number:
                cache[hash_key] = {"issue": issue_number, **todo}

    # Close issues for removed TODOs
    for hash_key in list(cache.keys()):
        if hash_key not in current_todos:
            if "issue" in cache[hash_key]:
                close_issue(cache[hash_key]["issue"])
            del cache[hash_key]

    save_cache(cache)


if __name__ == "__main__":
    main()
