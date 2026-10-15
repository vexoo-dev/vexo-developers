# Client

> **Planned.** The `Client` class does not exist yet.

## Purpose

`Client` is the main entrypoint for a Vexo bot. It owns the gateway connection, the REST client, event dispatch, and session state.

## Intended constructor options

| Option | Type | Default | Description |
|---|---|---|---|
| `token` | `string` | — | Bot token. Required. |
| `intents` | `number` \| `Intent[]` | `Intent.Default` | Which events the bot subscribes to. |
| `rest` | `RestOptions` | — | Overrides for the REST client. |
| `gateway` | `GatewayOptions` | — | Overrides for the gateway client. |

## Intended methods

| Method | Returns | Description |
|---|---|---|
| `login()` | `Promise<void>` | Connect to the gateway and start the session. |
| `destroy()` | `Promise<void>` | Close all connections and stop the client. |
| `on(event, listener)` | `this` | Subscribe to an event. |
| `once(event, listener)` | `this` | Subscribe once. |
| `off(event, listener)` | `this` | Unsubscribe. |

## Intended properties

| Property | Type | Description |
|---|---|---|
| `user` | `ClientUser \| null` | The bot user, once ready. |
| `ready` | `boolean` | Whether the client has completed login. |
| `ping` | `number` | Round-trip latency to the gateway, ms. |

## Status

None of this is implemented. Signatures may change.