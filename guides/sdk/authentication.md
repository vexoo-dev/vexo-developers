# Authentication

> **Planned.** Auth flow depends on decisions not yet made by the Vexo team.

## What we know

- Bots authenticate with a token obtained from the developer portal.
- Tokens must be kept secret and loaded from the environment.

## Open questions

1. Is the token sent as `Authorization: Bot <token>` or a different scheme?
2. Are tokens scoped (per-intent, per-guild) or global?
3. Is there an OAuth2 flow for user-context applications?
4. How are token rotations handled (grace period, revocation, etc.)?

## Handling rules

- Never commit a token.
- Never log a token.
- Rotate immediately if a token leaks.
- Use different tokens for different environments.

## Until this is answered

Do not write authentication code. This page will be filled in once the protocol is confirmed.