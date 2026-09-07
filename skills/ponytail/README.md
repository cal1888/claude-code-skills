# Ponytail

Makes the agent think like the laziest senior dev in the room — YAGNI, standard library first, one line before fifty; ~54% less code in its benchmarks. Plus audit / review / debt / gain companions.

- **Author:** Dietrich Gebert ([`DietrichGebert/ponytail`](https://github.com/DietrichGebert/ponytail))
- **License:** MIT (included in [`LICENSE`](LICENSE))
- **Status:** ✅ Vendored from [`DietrichGebert/ponytail`](https://github.com/DietrichGebert/ponytail); original `LICENSE` included

## Files

- `skills/ponytail` (the core, with lite / full / ultra intensity), `ponytail-audit`, `ponytail-review`, `ponytail-debt`, `ponytail-gain`, `ponytail-help`

## Install

```bash
cp -r skills/ponytail/skills/* ~/.claude/skills/

# Or as a plugin from source (recommended — also installs hooks and commands)
claude plugin marketplace add DietrichGebert/ponytail
claude plugin install ponytail@ponytail
```

## Notes

Trigger words: "ponytail", "be lazy", "simplest solution", "yagni", "do less". The upstream repo also ships adapters for Codex, Cursor, Copilot CLI, Gemini CLI and others, all built from the same SKILL.md.

---

*Curated in this collection with attribution. Full credit: [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail).*
