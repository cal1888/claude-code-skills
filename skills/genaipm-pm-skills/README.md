# GenAI PM Skills

Ten product-management workflow skills from GenAI PM Claw — PRDs, Type 1/Type 2 decision log, RICE prioritisation, metrics trees, user-interview guides, competitive analysis, launch checklists, retros, stakeholder updates, energy audit.

- **Author:** GenAI PM ([`menkesu/genaipm-claw`](https://github.com/menkesu/genaipm-claw), [genaipm.com](https://genaipm.com))
- **License:** MIT (declared in the source README; no LICENSE file) (included in [`LICENSE`](LICENSE))
- **Status:** ✅ Vendored from [`menkesu/genaipm-claw`](https://github.com/menkesu/genaipm-claw); original `LICENSE` included

## Files

- `skills/pm-prd`, `pm-decision`, `pm-prioritize`, `pm-metrics`, `pm-interview-guide`, `pm-competitive`, `pm-launch-checklist`, `pm-retro`, `pm-stakeholder-update`, `pm-energy-audit`

## Install

```bash
cp -r skills/genaipm-pm-skills/skills/* ~/.claude/skills/

# Or the full PM operating system (needs NanoClaw)
git clone https://github.com/menkesu/genaipm-claw.git
```

## Notes

Upstream is a 16-skill 'PM operating system' built on [NanoClaw](https://github.com/qwibitai/nanoclaw) with a Command Center dashboard and memory wiki. Only the ten self-contained framework skills are vendored here; the setup/plumbing skills (`pm-setup`, `pm-add-module`, `pm-skills`, `daily-brief`, `av-improve`, `one-step-better-ai-pm`) need the full install. Some skills reference `initiatives.json` / `hq/` files from that system — they degrade gracefully without them.

---

*Curated in this collection with attribution. Full credit: [menkesu/genaipm-claw](https://github.com/menkesu/genaipm-claw).*
