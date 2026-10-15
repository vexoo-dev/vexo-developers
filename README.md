# Vexo Developers

> Official developer documentation and library workspace for **Vexo** — a platform for communities and independent spaces.

---

## About Vexo

Vexo is a communication platform where users create and manage independent communities, organize conversations, and build integrations on top of the platform. It is designed around open, extensible tooling for developers.

## About this repository

This repository is the official home of the Vexo developer ecosystem. It contains:

- **Documentation** for building bots and integrations with Vexo.
- **The `@vexojs/*` library workspace** — the official JavaScript and TypeScript SDKs.
- **Guides and examples** for developers getting started with Vexo.
- **API reference** for the Vexo protocol surface exposed to developers.

This repository is independent from the Vexo backend. It does not contain the Vexo application itself, a server, or a database.

---

## Project status

> ⚠️ **Early design phase.**
>
> The Vexo developer protocol is not yet publicly finalized. The libraries in this repository are **not implemented and not published to npm**. Everything documented here describes the *intended* design and will evolve as the protocol is defined.

Nothing in this repository should be treated as a stable, installable, or production-ready API.

### Library status

| Package | Purpose | Status |
| --- | --- | --- |
| `@vexojs/sdk` | Main developer entrypoint for building Vexo bots | Planned |
| `@vexojs/rest` | REST API client with error and rate-limit handling | Planned |
| `@vexojs/gateway` | Gateway connection client (transport to be confirmed) | Planned |
| `@vexojs/types` | TypeScript type definitions for events, payloads, and responses | Planned |
| `@vexojs/builders` | Builders for commands, buttons, menus, and interactions | Planned |

No package has a published release. Do not attempt to install these packages from npm.

---

## Repository structure
