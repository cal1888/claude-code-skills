# Claude Code Skills — Curated Collection

A curated, credited collection of high-quality [Claude Code](https://docs.claude.com/en/docs/claude-code) Agent Skills, organised in one place with install commands and links back to every original source.

This is mostly a **curation**, not a claim of authorship. Every third-party skill below was created by the people and companies credited in [`ATTRIBUTION.md`](ATTRIBUTION.md). Skills that are openly licensed for redistribution are vendored in full (with their license intact); everything else is indexed with a one-line install command that pulls it straight from the original repo. A handful of skills marked ✍️ are original to this repo — written for day-to-day product, writing and design work — and are MIT licensed.

## What's a Skill?

A Claude Code Skill is a folder with a `SKILL.md` file that Claude Code auto-discovers and loads when your prompt matches the skill's triggers — extending the agent with focused, reusable expertise. See the [official docs](https://docs.claude.com/en/docs/claude-code).

## The Collection

> The table below is generated from [`skills/registry.json`](skills/registry.json) by [`scripts/sync.mjs`](scripts/sync.mjs). Add a skill to the registry and re-run the script to update it.

<!-- COLLECTION:START -->

| Skill | What it does | Source | License | Status |
|-------|-------------|--------|---------|--------|
| [HyperFrames](skills/hyperframes/) | Animated videos from HTML — captions, narration, reactive visuals, scene transitions | [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | Apache-2.0 | ✅ Vendored |
| [Remotion Best Practices](skills/remotion-best-practices/) | Full videos in React with Remotion — animations, captions, audio, transitions, charts, effects, AI voiceovers | [remotion-dev/skills](https://github.com/remotion-dev/skills) | No license (all rights reserved) | 🔗 Install-linked |
| [AI Video Generation](skills/ai-video-generation/) | Generate video across 40+ models (Veo, Seedance, Wan, Grok) via inference.sh | [inference-sh/skills](https://github.com/inference-sh/skills) | No license (all rights reserved) | 🔗 Install-linked |
| [AI Image Generation](skills/ai-image-generation/) | Social graphics, illustrations, product images across 50+ models (FLUX, Gemini, Grok, Seedream) | [inference-sh/skills](https://github.com/inference-sh/skills) | No license (all rights reserved) | 🔗 Install-linked |
| [AI Avatar Video](skills/ai-avatar-video/) | Talking-head / AI-presenter / UGC-style videos from an image + script | [inference-sh/skills](https://github.com/inference-sh/skills) | No license (all rights reserved) | 🔗 Install-linked |
| [Find Animation Opportunities](skills/find-animation-opportunities/) | Find places in a UI that should animate (and reject what shouldn't) — read-only, proposes exact motion values | [emilkowalski/skills](https://github.com/emilkowalski/skills) | MIT | ✅ Vendored |
| [Emil Design Eng](skills/emil-design-eng/) | Emil Kowalski's philosophy on UI polish, component design, and the invisible details that make software feel great | [emilkowalski/skills](https://github.com/emilkowalski/skills) | MIT | ✅ Vendored |
| [Animation Vocabulary](skills/animation-vocabulary/) | Reverse-lookup glossary: turn a vague description of a motion effect into its exact term | [emilkowalski/skills](https://github.com/emilkowalski/skills) | MIT | ✅ Vendored |
| [Apple Design](skills/apple-design/) | Apple's approach to fluid, physical interface motion and design foundations, translated for the web | [emilkowalski/skills](https://github.com/emilkowalski/skills) | MIT | ✅ Vendored |
| [Improve Animations](skills/improve-animations/) | Audit a codebase's motion and produce prioritized animation-improvement plans for other agents to execute | [emilkowalski/skills](https://github.com/emilkowalski/skills) | MIT | ✅ Vendored |
| [Review Animations](skills/review-animations/) | Review animation/motion code against a high craft bar derived from Emil Kowalski's philosophy — approval is earned | [emilkowalski/skills](https://github.com/emilkowalski/skills) | MIT | ✅ Vendored |
| [Pick UI Library](skills/pick-ui-library/) | Opinionated lookup: the right library for a frontend task — toasts, charts, drag-and-drop, OTP inputs, command menus, state, styling | [emilkowalski/skills](https://github.com/emilkowalski/skills) | MIT | ✅ Vendored |
| [Scroll World](skills/scroll-world/) | Scroll-scrubbed 'fly through the world' landing page — one continuous pre-rendered camera flight with no cuts, scenes generated with Higgsfield | [oso95/scroll-world](https://github.com/oso95/scroll-world) | MIT | ✅ Vendored |
| [Humanizer](skills/humanizer/) | Removes signs of AI-generated writing from text, based on Wikipedia's 'Signs of AI writing' guide | [blader/humanizer](https://github.com/blader/humanizer) | MIT | ✅ Vendored |
| [UI/UX Pro Max](skills/ui-ux-pro-max/) | Design intelligence: 67 styles, 96 palettes, 57 font pairings, 25 chart types, 13 stacks — searchable via bundled scripts | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | MIT | ✅ Vendored |
| [Fireworks Tech Graph](skills/fireworks-tech-graph/) | Production-quality SVG+PNG technical diagrams from natural language — 7 visual styles, UML types, agent/memory workflow patterns | [yizhiyanhua-ai/fireworks-tech-graph](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) | MIT | ✅ Vendored |
| [Interfaces](skills/interfaces/) | Eleven 'better-*' skills for building great interfaces — layout, typography, colour, accessibility, UX writing, reviews, variants | [jakubkrehel/skills](https://github.com/jakubkrehel/skills) | MIT | ✅ Vendored |
| [Cloudflare Skills](skills/cloudflare-skills/) | Official Cloudflare pack: Workers best practices, Wrangler, Durable Objects, Agents SDK, Sandbox SDK, Turnstile setup, Email Service, Cloudflare One, web performance | [cloudflare/skills](https://github.com/cloudflare/skills) | Apache-2.0 | ✅ Vendored |
| [last30days](skills/last30days/) | Research any topic across Reddit, X, YouTube, Hacker News, Polymarket and the web from the last 30 days, then synthesise a grounded summary | [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | MIT | 🔗 Install-linked |
| [LEJ Output Fixer](skills/lej-output-fixer/) | Three ready-made Claude Code output styles (including 'Bottom Line First') plus a picker command — makes Claude's replies readable again | [justfinethanku/LEJ-output-fixer](https://github.com/justfinethanku/LEJ-output-fixer) | MIT | 🔗 Install-linked |
| [Meta Ads Generator](skills/meta-ads-generator/) | Product URL → brand voice, competitor and review scrape, psychology pillar map → four on-brand Meta ad creatives; backend-agnostic image generation | [tenfoldmarc/meta-ads-generator-skill](https://github.com/tenfoldmarc/meta-ads-generator-skill) | No license (all rights reserved) | 🔗 Install-linked |
| [Superdesign](skills/superdesign/) | AI product-design agent for frontend UI/UX — faithful reproductions, iterated variants and multi-page flows from a component file | [superdesigndev/superdesign](https://github.com/superdesigndev/superdesign) | AGPL-3.0 (some files under a commercial license) | 🔗 Install-linked |
| [Minto Pyramid](skills/minto-pyramid/) | Barbara Minto's Pyramid Principle for business writing — answer first, three MECE reasons, evidence underneath; five review modes from buried-lede test to email compression | [cal1888 (original)](https://github.com/cal1888/claude-code-skills/tree/main/skills/minto-pyramid) | MIT | ✍️ Original |
| [Design Inspo](skills/design-inspo/) | Find cohesive micro-interaction and animation inspiration (Mobbin, Godly, Detail.design, 60fps…) that fits a product's existing motion language | [cal1888 (original)](https://github.com/cal1888/claude-code-skills/tree/main/skills/design-inspo) | MIT | ✍️ Original |
| [Rhetorical Devices](skills/rhetorical-devices/) | Ten classical rhetorical devices (tricolon, antithesis, anaphora, antimetabole…) for persuasive, memorable formal writing and speeches | [cal1888 (original)](https://github.com/cal1888/claude-code-skills/tree/main/skills/rhetorical-devices) | MIT | ✍️ Original |
| [Persona Brief](skills/persona-brief/) | Live-researched, Reddit-native audience persona briefs structured as a paste-into-any-LLM marketing playbook — subreddit map, psyche, real quotes, pain points, content angles, vocabulary guardrails | [cal1888 (original)](https://github.com/cal1888/claude-code-skills/tree/main/skills/persona-brief) | MIT | ✍️ Original |
| [Character Prompt Design](skills/character-prompt-design/) | Iterative method for AI character / agent persona prompts — clarify scope before drafting, draft into structured fields, revise consistently across fields, ship with safe defaults, capture lessons | [cal1888 (original)](https://github.com/cal1888/claude-code-skills/tree/main/skills/character-prompt-design) | MIT | ✍️ Original |
| [ASO & App Marketing Skills](skills/aso-skills/) | 40-skill pack for App Store Optimization and app marketing — audits, keyword research, metadata, screenshots, reviews, launches, Apple Search Ads, localization, retention, monetization | [Eronred/aso-skills](https://github.com/Eronred/aso-skills) | MIT | ✅ Vendored |
| [GenAI PM Skills](skills/genaipm-pm-skills/) | Ten product-management workflow skills from GenAI PM Claw — PRDs, Type 1/Type 2 decision log, RICE prioritisation, metrics trees, user-interview guides, competitive analysis, launch checklists, retros, stakeholder updates, energy audit | [menkesu/genaipm-claw](https://github.com/menkesu/genaipm-claw) | MIT (declared in the source README; no LICENSE file) | ✅ Vendored |
| [Skill Writer](skills/skill-writer/) | Meta-skill that walks you through authoring a Claude Code Agent Skill — scope, frontmatter, structure, progressive disclosure, validation | [virgoC0der/awesome-claude-code](https://github.com/virgoC0der/awesome-claude-code) | MIT | ✅ Vendored |
| [Ponytail](skills/ponytail/) | Makes the agent think like the laziest senior dev in the room — YAGNI, standard library first, one line before fifty; ~54% less code in its benchmarks. Plus audit / review / debt / gain companions | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | MIT | ✅ Vendored |
| [Anti-AI](skills/anti-ai/) | Rewrite AI-generated text so it passes as human to readers and to statistical detectors (Pangram etc.) — detector mode with 'discourse fracture' and an interleave protocol, reader mode for formal register | [unknown](https://github.com/cal1888/claude-code-skills/tree/main/skills/anti-ai) | Unknown (no license in the zip) | ❓ Unattributed |
| [Simplified Technical English (STE)](skills/ste/) | Write or rewrite text in ASD-STE100 Simplified Technical English — controlled vocabulary, one instruction per sentence, word-substitution table and worked examples | [unknown](https://github.com/cal1888/claude-code-skills/tree/main/skills/ste) | Unknown (no license in the zip) | ❓ Unattributed |

<!-- COLLECTION:END -->

**Status key** — ✅ *Vendored*: files included here under a redistribution-friendly license. 🔗 *Install-linked*: the source repo doesn't carry a redistribution license (or is a large plugin better installed from source), so this folder documents the skill and gives you the official one-line install rather than rehosting the files. ✍️ *Original*: written for this collection, MIT licensed. ❓ *Unattributed*: arrived as a zip with no author inside; included in good faith, credited or removed the moment the author is known.

## Installing

Vendored and original skills: copy the folder into `~/.claude/skills/` (or a project's `.claude/skills/`). Packs (HyperFrames, Interfaces, Cloudflare) keep their skills one level down in `skills/<pack>/skills/`. Install-linked skills: use the command in that skill's README. Most third-party skills also install with [`npx skills`](https://skills.sh) straight from the author.

```bash
# Single vendored or original skill
cp -r skills/minto-pyramid ~/.claude/skills/

# A pack — copy the inner skills
cp -r skills/cloudflare-skills/skills/* ~/.claude/skills/

# Install-linked skills — pull from the original source
npx skills add remotion-dev/skills
npx skills add inference-sh/skills@ai-video-generation
npx skills add mvanhorn/last30days-skill -g
claude plugin marketplace add justfinethanku/LEJ-output-fixer && claude plugin install lej-output-fixer@lej
```

See each skill's own `README.md` for exact usage and requirements.

## Licensing & Attribution

- This repository's **original content** (index, per-skill READMEs, sync tooling) is [MIT licensed](LICENSE).
- **Vendored skills keep their own license**, included alongside their files.
- Full source and author credit for every skill is in [`ATTRIBUTION.md`](ATTRIBUTION.md).

If you're an author listed here and would like your skill vendored, install-linked differently, or removed, open an issue — happy to adjust.
