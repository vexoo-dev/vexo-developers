// Non-runnable example. `@vexojs/sdk` is not published.
// This file shows the intended developer experience only.

// When the SDK is released, this is what it would look like:
//
// import { Client, Events } from '@vexojs/sdk';
//
// const client = new Client({ token: process.env.VEXO_BOT_TOKEN });
// client.once(Events.Ready, () => console.log(`Logged in as ${client.user.tag}`));
// await client.login();

console.log(
  'hello-bot is a design example. @vexojs/sdk is not published yet.'
);