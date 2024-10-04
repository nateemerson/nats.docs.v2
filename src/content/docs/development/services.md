---
title: Services
---
NATS has introduced a services protocol to support first-class services in NATS
clients and tooling. This protocol is client-side and doesn’t require changes
to the NATS server or JetStream.

To check if the NATS client in your language supports the services API, refer
to its docs or GitHub repository, as not all clients may have implemented it
yet. You can also explore examples on NATS By Example.

## Key Concepts
- **Service**: A group of related functionality with a name and version
(following semver rules). Services are discoverable within NATS.
- **Endpoint**: A single operation within a service. Every service must have at
least one endpoint.
- **Group**: An optional collection of endpoints with a common subject prefix.

## Service Operations

The services API supports three key operations for discoverability and
observability:

- **PING**: Requests on `$SRV.PING.>` gather replies from active services,
helping list available services.
- **STATS**: Requests on `$SRV.STATS.>` retrieve service statistics, including
total requests, errors, and processing time.
- **INFO**: Requests on `$SRV.INFO.>` return service definitions and metadata,
including groups and endpoints.

The NATS client manages these subjects, but developers are responsible for
handling requests to service endpoints.

