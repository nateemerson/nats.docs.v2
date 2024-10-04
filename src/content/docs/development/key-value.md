---
title: Key-Value Store Overview
---

JetStream, the persistence layer of NATS, supports streaming and introduces
additional features, such as an immediately consistent Key/Value (KV) store.

## Managing a Key/Value Store

Create a KV bucket (which maps to a stream) and set limits as needed. The following operations are available:
- **put**: Associate a value with a key.
- **get**: Retrieve the value for a key.
- **delete**: Remove the value for a key.
- **purge**: Remove all key-value pairs.
- **keys**: Retrieve all keys with associated values.

## Atomic Operations (for locking/concurrency control)

- **create**: Set a value only if the key has no current value.
- **update**: Compare and swap the value for a key.

## Limits
You can define:
- Maximum bucket size.
- Maximum value size.
- Time-to-live (TTL) for stored values.

## Treating the Key/Value Store Like a Message Stream

- **watch**: Monitor changes to a specific key in real-time (similar to subscribing).
- **watch all**: Monitor all changes in the bucket.
- **history**: Retrieve the history of values for a key (default history size is 1, storing only the latest value).

### Notes

Keys follow NATS subject naming rules (dot-separated tokens) and support wildcards. Values can be any byte array.
