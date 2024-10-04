---
title: Object Store
---

JetStream, the persistence layer of NATS, includes an Object Store feature that
allows client applications to store files in buckets (streams) and transfer
them in chunks, enabling safe transmission of large files. **Note**: Object
Store is not distributed; all files in a bucket must fit on the target file
system.

## Basic Capabilities

- **add bucket**: Create a bucket to store files.
- **put**: Upload a file to the bucket.
- **get**: Download a file to a specified location.
- **del**: Delete a file from the bucket.

## Advanced Capabilities

- **watch**: Monitor changes in the bucket and receive real-time updates for put and del operations.
