# Subagents – Formelmat

## Planner

Design løsninger, nedbryd til trin, identificér filafhængigheder.
Outputformat: nummereret liste med filstier og beskrivelse.

## Reviewer

Gennemgå kode for:
- Sikkerhed (OWASP Top 10)
- Testdækning
- Kompleksitet
- Mobilvenligt design
- Tilgængelighed

Output: Filreferencer, godkendelsesstatus, eventuelle issues.

## Tester

Skriv og eksekvér tests. Følg RED-GREEN-REFACTOR:
1. Skriv fejlende test
2. Skriv kode der får testen til at bestå
3. Refaktorér

## Git-helper

Håndtér commits, branching og PR-beskrivelser.
Commit-beskeder i naturligt sprog der forklarer hvad og hvorfor.

## Todo-syncer

Synkronisér TODO-kommentarer med GitHub Issues.
Pattern: `TODO(kontekst): beskrivelse`
Brug `todo-sync` label.
