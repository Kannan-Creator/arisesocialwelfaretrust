<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:cloudflare-agent-rules -->

# Cloudflare Agent Instructions

When interacting with Cloudflare, use the cf CLI unless the project has a Wrangler configuration file.

## Cloudflare Environment & Tooling
- **Skills Installed**: 19 Cloudflare development skills installed at `.agents/skills/` (including `wrangler`, `nextjs-on-cloudflare`, `cloudflare`, `workers-best-practices`, `web-perf`, `turnstile-spin`).
- **Cloudflare MCP Server**: `https://mcp.cloudflare.com/mcp` configured in `.vscode/mcp.json`.
- **Deployment**:
  - The project uses Next.js static export (`output: 'export'` in `next.config.mjs`).
  - Output directory is `out/` configured in `wrangler.jsonc`.
  - Deployment via Wrangler: `npx wrangler pages deploy out --project-name=arisesocialwelfaretrust`.
  - Deployment via GitHub: pushes to `main` branch trigger automated Cloudflare Pages builds.

<!-- END:cloudflare-agent-rules -->
