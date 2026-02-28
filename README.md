# Product OS

An AI-powered product operating system that transforms how product teams make decisions.

**The problem:** Product orgs drown in signals scattered across 15+ tools. PMs spend hours gathering info manually — and the real cost isn't time, it's the signals they miss entirely.

**The approach:** Ingest signals from everywhere (GitHub, HN, Reddit, news, internal data), structure them through 30 codified PM reasoning frameworks, and produce decision-ready artifacts — scored matrices, trade-off docs, sequenced roadmaps.

## What's in this repo

- **Web app** — Next.js prototype with 4 pages: Dashboard, Skill Library, Dependency Graph, Decision Workspace
- **30 PM skills** — Codified reasoning frameworks across 5 categories (Strategic, Planning, Execution, Agent-First, Analysis) - Source of Skills.MD files: https://github.com/ashstep2/pm-playbook
- **Skill dependency graph** — Interactive visualization of how skills chain together
- **Example outputs** — Real skill execution outputs in `/outputs`

## Stack

Next.js 14 · TypeScript · Tailwind CSS · React Flow · Framer Motion

## Run locally

```bash
npm install
npm run dev
```
