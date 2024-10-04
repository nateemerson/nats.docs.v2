---
title: Security
---

NATS provides robust security features:

- **Encryption**: Connections are secured using TLS.
- **Authentication Options**:
  - Token Authentication
  - Username/Password
  - TLS Certificates
  - NKEY with Challenge-Response
  - Decentralized JWT Authentication

NATS can integrate with existing authentication systems or support custom
authentication via Auth callouts.

Authenticated clients are identified as users with specific authorizations. For
multi-tenancy, accounts create independent subject namespaces and control the
import/export of messages and services. User access to subjects or subject
wildcards is controlled through server configuration or JWTs.

JWT authentication is decentralized, allowing account holders to manage users
and authorizations without changing NATS server configurations. The server
validates JWTs without needing to store user private keys.

JetStream also provides encryption for data at rest.

