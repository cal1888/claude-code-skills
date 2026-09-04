# last30days

Research any topic across Reddit, X, YouTube, Hacker News, Polymarket and the web from the last 30 days, then synthesise a grounded summary.

- **Author:** Matt Van Horn ([`mvanhorn/last30days-skill`](https://github.com/mvanhorn/last30days-skill))
- **License:** MIT
- **Status:** 🔗 Install-linked — this skill is **not** rehosted here; install it from the official source below.

## Install

```bash
npx skills add mvanhorn/last30days-skill -g

# Or as a Claude Code plugin
claude plugin marketplace add mvanhorn/last30days-skill
claude plugin install last30days@last30days-skill
```

## Why install-linked and not vendored?

MIT-licensed, but it is a 44 MB plugin with a Python toolchain, MCP server and fixtures — far better installed from source than copied. API keys live in `~/.config/last30days/.env` (see the source README).

---

*Curated in this collection with attribution. Full credit: [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill).*
