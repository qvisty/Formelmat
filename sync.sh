#!/bin/bash
# sync.sh – Validér projektopsætning
# Tjekker at alle konfigurationsfiler er korrekte

PASS=0
FAIL=0

check() {
  local desc="$1"
  local result="$2"
  if [ "$result" -eq 0 ]; then
    echo "  ✅ $desc"
    PASS=$((PASS + 1))
  else
    echo "  ❌ $desc"
    FAIL=$((FAIL + 1))
  fi
}

echo ""
echo "🔍 Validerer projektopsætning..."
echo ""

# AGENTS.md – check 9 sections
echo "📋 AGENTS.md"
if [ -f "AGENTS.md" ]; then
  for section in "SESSION START" "TECH STACK" "SYSTEMREGLER" "KODEKODEKS" "GIT OG GITHUB" "GITHUB ISSUES" "PLANLÆGNINGSPROTOKOL" "IMPLEMENTERING" "DEFINITION OF DONE"; do
    grep -q "$section" AGENTS.md
    check "Sektion: $section" $?
  done
else
  check "AGENTS.md eksisterer" 1
fi

echo ""

# CLAUDE.md – check directives
echo "📋 CLAUDE.md"
if [ -f "CLAUDE.md" ]; then
  grep -q "@AGENTS.md" CLAUDE.md
  check "Refererer til @AGENTS.md" $?
  grep -q "@.planning/PROJECT.md" CLAUDE.md
  check "Refererer til @.planning/PROJECT.md" $?
  grep -q "@.planning/STATE.md" CLAUDE.md
  check "Refererer til @.planning/STATE.md" $?
else
  check "CLAUDE.md eksisterer" 1
fi

echo ""

# Planning files
echo "📋 .planning/"
[ -f ".planning/PROJECT.md" ]
check "PROJECT.md eksisterer" $?
[ -f ".planning/STATE.md" ]
check "STATE.md eksisterer" $?

echo ""

# .claude/ config
echo "📋 .claude/"
[ -f ".claude/settings.json" ]
check "settings.json eksisterer" $?
[ -f ".claude/agents.md" ]
check "agents.md eksisterer" $?

echo ""

# Hooks
echo "📋 Hooks"
[ -f ".claude/hooks/commit-msg" ]
check "commit-msg hook eksisterer" $?
[ -x ".claude/hooks/commit-msg" ]
check "commit-msg er eksekverbar" $?
[ -f ".claude/hooks/post-commit" ]
check "post-commit hook eksisterer" $?
[ -x ".claude/hooks/post-commit" ]
check "post-commit er eksekverbar" $?
[ -f ".claude/hooks/todo-github-sync.py" ]
check "todo-github-sync.py eksisterer" $?

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✅ Bestået: $PASS"
echo "  ❌ Fejlet:  $FAIL"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ "$FAIL" -gt 0 ]; then
  exit 1
fi
exit 0
