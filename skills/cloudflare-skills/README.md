# Cloudflare Skills

Official Cloudflare pack: Workers best practices, Wrangler, Durable Objects, Agents SDK, Sandbox SDK, Turnstile setup, Email Service, Cloudflare One, web performance.

- **Author:** Cloudflare ([`cloudflare/skills`](https://github.com/cloudflare/skills))
- **License:** Apache-2.0 (included in [`LICENSE`](LICENSE))
- **Status:** ✅ Vendored from [`cloudflare/skills`](https://github.com/cloudflare/skills); original `LICENSE` included

## Files

- `skills/agents-sdk`, `cloudflare`, `cloudflare-email-service`, `cloudflare-one`, `cloudflare-one-migrations`, `durable-objects`, `sandbox-sdk`, `turnstile-spin`, `web-perf`, `workers-best-practices`, `wrangler`

## Install

```bash
cp -r skills/cloudflare-skills/skills/* ~/.claude/skills/

# Or from source (recommended — Cloudflare updates these often)
npx skills add cloudflare/skills
```

## Notes

Snapshot from July 2026. Upstream has since split `sandbox-sdk` into `sandbox-stable` / `sandbox-next`; install from source for the current set.

---

*Curated in this collection with attribution. Full credit: [cloudflare/skills](https://github.com/cloudflare/skills).*
