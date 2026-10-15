# Events

> **Planned.** Event names and payloads depend on the protocol.

## Intended usage

```ts
import { Client, Events } from '@vexojs/sdk';

const client = new Client({ token: process.env.VEXO_BOT_TOKEN! });

client.on(Events.Ready, () => console.log('ready'));

client.on(Events.MessageCreate, (message) => {
  console.log(message.content);
});