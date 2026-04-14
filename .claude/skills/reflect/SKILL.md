---
name: reflect
description: End-of-session review — evaluate whether learnings should be added to CLAUDE.md
context: conversation
---

# Reflect: End-of-Session CLAUDE.md Review

Analyze the current session's work and evaluate whether any patterns or learnings should be added to, edited in, or removed from CLAUDE.md. This ensures guidelines evolve based on real work while staying concise and correct.

## When to Use

Run `/reflect` at the end of a coding session — especially after:
- Implementing a new feature or pattern
- Fixing a tricky bug with a generalizable lesson
- A PR review that surfaced a recurring issue
- Any session where you learned something about the codebase conventions

## Execution Flow

### Step 1: Gather Context

1. Read the current CLAUDE.md in full
2. Run `git diff main...HEAD --stat` to understand what files were changed in the session
3. Run `git log main...HEAD --oneline` to understand the commit history
4. Review the conversation context to identify patterns, conventions, and learnings

### Step 2: Identify Candidate Learnings

For each pattern or convention encountered in the session, create a candidate entry. Examples:
- A new coding pattern that was applied
- A gotcha or pitfall that was discovered
- A convention that was followed or established
- A tool/library usage pattern

### Step 3: Apply Strict Quality Filters

For EACH candidate, evaluate ALL of these criteria. A candidate must pass ALL to be proposed:

**1. Universality** — Would this apply to most future PRs, not just this one?
- YES: "Always use `Field(default_factory=list)` instead of `= []` in Pydantic schemas" (if it were actually a correctness issue)
- NO: "Add security headers to media proxy endpoints" (specific to one endpoint)

**2. Correctness** — Is this always true, or only true in certain contexts?
- YES: "Use `response.raise_for_status()` instead of manual status code checks"
- NO: "Always use `settings.X` instead of module-level constants" (sometimes re-exports improve readability)

**3. Non-contradiction** — Does it conflict with ANY existing CLAUDE.md instruction?
- Check every existing instruction carefully before proposing additions

**4. Non-redundancy** — Is this already covered by an existing instruction, even partially?
- If an existing instruction covers 80% of the intent, prefer EDITING that instruction over adding a new one
- If two instructions would overlap in scope, merge them

**5. Conciseness** — Can this be expressed in 1-2 lines?
- CLAUDE.md instructions should be scannable. If an instruction needs a paragraph of explanation, it's probably too specific to be a universal rule.

### Step 4: Classify Actions

For candidates that pass all filters, classify the action:

| Action | When |
|--------|------|
| **Edit existing instruction** | An existing rule partially covers this — extend it |
| **Add new instruction** | Genuinely new pattern not covered anywhere |
| **Remove/update instruction** | An existing rule was discovered to be wrong or outdated |
| **No changes** | Most common outcome — existing CLAUDE.md is sufficient |

### Step 5: Present and Confirm

Present findings as a structured summary:

1. **Session summary** — 2-3 sentence overview of what was done
2. **Candidates evaluated** — Table of each pattern considered, with pass/fail on each criterion
3. **Proposed changes** — Exact edits (with before/after) or "No changes recommended"
4. **Reasoning** — Brief explanation for each proposal and each rejection

**CRITICAL: Always ask for user confirmation before making any edits to CLAUDE.md.** Present the proposed changes and wait for approval.

## Anti-Patterns — Do NOT Propose

- Instructions that are specific to one feature, endpoint, or file
- Instructions that duplicate what existing rules already say in different words
- Instructions that are technically correct but too niche to encounter regularly
- Instructions that are style preferences rather than correctness rules (unless the team has explicitly standardized)
- Instructions longer than 2 lines — if it needs more, it's too specific for CLAUDE.md

## Output Format

```
## /reflect — Session Review

### Session Summary
[2-3 sentences about what was accomplished]

### Patterns Evaluated

| Pattern | Universal? | Correct? | Non-contradictory? | Non-redundant? | Verdict |
|---------|-----------|----------|-------------------|----------------|---------|
| ...     | ✓/✗       | ✓/✗      | ✓/✗               | ✓/✗            | Skip/Propose |

### Recommendation
[Either "No changes to CLAUDE.md" with brief reasoning, or exact proposed edits with before/after diffs]
```
