# HyperFrames

**Animated videos from HTML — built for coding agents.**

Write HTML, CSS, media and seekable animations; HyperFrames renders them into deterministic MP4 video. Supports GSAP, CSS, Lottie, Three.js, Anime.js and WAAPI for animation, with captions, narration, reactive visuals and scene transitions.

- **Author:** HeyGen ([`heygen-com`](https://github.com/heygen-com/hyperframes))
- **License:** Apache-2.0 (included in [`LICENSE`](LICENSE))
- **Status:** ✅ Vendored — skill files are included in [`skills/`](skills/)

## Vendored skills

The `skills/` folder here contains the text skill files from the HyperFrames pack:

| Skill | Purpose |
|-------|---------|
| `captions-overlay` | Add and style caption overlays on rendered video |
| `changelog-video` | Produce changelog / release-note videos (with example tokens, references, caption-alignment script) |
| `cut-the-curve` | Easing and motion-curve guidance with GSAP examples |
| `motion-doctrine` | Core motion principles + seam-gate validation scripts |
| `oversized-cursor` | Oversized-cursor interaction/demo pattern |
| `seam-craft` | Scene-seam / transition craft |

> Only text skill files (`.md`, `.mjs`, `.json`) are vendored. Binary assets from the
> original repo (fonts, audio, sample video) are **not** included, as those can carry
> separate licenses — install the full pack from source if you need them.

## Install

```bash
# From this repo
cp -r skills/* ~/.claude/skills/

# Or the full pack (incl. assets) from the source
npx skills add heygen-com/hyperframes --full-depth
```

## Requirements

Node.js. See the [original repo](https://github.com/heygen-com/hyperframes) and its [quickstart](https://hyperframes.mintlify.app/quickstart) for the full render pipeline and dependencies.

---

*Curated in this collection with attribution. Full credit and license: [HeyGen / hyperframes](https://github.com/heygen-com/hyperframes).*
