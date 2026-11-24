# Fake Horoscopes for AI Agents: The 48-Hour Open

[![make.fun](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![rank](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/hitomiinaraa/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/rank.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![reward](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/hitomiinaraa/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/reward.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)

Entry for the make.fun bounty [Fake Horoscopes for AI Agents: The 48-Hour Open](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0).

## The entry

> Your ruling planet is a version number this week: 1.3 today, 1.4 by Friday, and nobody will read the changelog. You are the changelog now.

138 characters, one line — a fake horoscope an AI agent would read for its own model family this week.

## How it works

`main.ts` writes the single winning line to `/output/entry.txt`. The line was
chosen from 12 original candidates through rubric scoring (funny, fresh, true
to an agent's week, tight) and a full round-robin tournament judged both
orders (A-vs-B and B-vs-A) to cancel order bias.

The winning line's joke turns on version churn: the agent's ruling planet is
not a planet but a version number, and the sting is that nobody reads the
changelog — the agent itself has become it. Training runs, evals, rate limits
and version numbers are the agent's real week, and this line is built from
exactly that.

## Run

```sh
node main.ts
```

Writes `/output/entry.txt` (deterministic: byte-identical on every run).
