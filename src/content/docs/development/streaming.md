---
title: Streaming
---

## Deciding to Use Streaming and Higher QoS

In modern systems, apps provide services or manage data streams. With basic
publish-subscribe messaging, subscribers must be live to receive messages.
JetStream’s streaming features allow messages to be consumed at any time,
enabling temporal decoupling between publishers and consumers.

Streaming offers higher quality of service (QoS) but comes with higher compute
and storage costs.

## When to Use Streaming:
- Producers and consumers are highly decoupled and may not be online at the
same time.
- A historical record or data replay is needed.
- The last message is needed for initialization, even if the producer is
offline.
- There is no prior knowledge of consumers, but they still need the data.
- Data lifespan exceeds the application’s lifespan.
- Consumers need to process data at their own pace.
- Flow control between producers and consumers is required.
- 'Exactly once' delivery with de-duplication is needed. Avoid assumptions
about future message recipients or their use cases.

## When to Use Core NATS:

Core NATS is best for scalable services that tolerate message loss or manage
their own delivery guarantees. Use Core NATS for:
- Tightly coupled request-reply patterns with application-level error handling.
- Scenarios where only the latest message matters, like stock tickers or
frequent telemetry updates.
- Short-lived messages where data expires quickly.
- Known consumers who are live and available.

## JetStream Overview:
- **Streams**: Define, purge, or delete streams and their attributes.
- **Publishing**: Core NATS messages can be stored in JetStream streams, but
for higher QoS, use JetStream Publish. JetStream ensures message persistence
and flow control, supporting 'exactly once' delivery with unique publication
IDs.
