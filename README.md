# Claude Code Skills — Curated Collection

A curated, credited collection of high-quality [Claude Code](https://docs.claude.com/en/docs/claude-code) Agent Skills, organised in one place with install commands and links back to every original source.

This is a **curation**, not a claim of authorship. Every skill below was created by the people and companies credited in [`ATTRIBUTION.md`](ATTRIBUTION.md). Skills that are openly licensed for redistribution are vendored in full (with their license intact); everything else is indexed with a one-line install command that pulls it straight from the original repo.

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

<!-- COLLECTION:END -->

**Status key** — ✅ *Vendored*: files included here under a redistribution-friendly license. 🔗 *Install-linked*: the source repo doesn't carry a redistribution license, so this folder documents the skill and gives you the official one-line install rather than rehosting the files.

## Installing

Most skills install with [`npx skills`](https://skills.sh):

```bash
# Vendored skills — copy the folder into your project or ~/.claude/skills/
cp -r skills/hyperframes/skills/* ~/.claude/skills/

# Install-linked skills — pull from the original source
npx skills add remotion-dev/skills
npx skills add inference-sh/skills@ai-video-generation
npx skills add inference-sh/skills@ai-image-generation
npx skills add inference-sh/skills@ai-avatar-video
```

See each skill's own `README.md` for exact usage and requirements.

## Licensing & Attribution

- This repository's **original content** (index, per-skill READMEs, sync tooling) is [MIT licensed](LICENSE).
- **Vendored skills keep their own license**, included alongside their files.
- Full source and author credit for every skill is in [`ATTRIBUTION.md`](ATTRIBUTION.md).

If you're an author listed here and would like your skill vendored, install-linked differently, or removed, open an issue — happy to adjust.
