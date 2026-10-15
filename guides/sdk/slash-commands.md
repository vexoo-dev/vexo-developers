# Slash commands

> **Planned.** Depends on whether Vexo supports application commands.

## Intended usage

```ts
import { SlashCommandBuilder } from '@vexojs/builders';

const ping = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Replies with pong.');

await client.application.commands.create(ping.toJSON());