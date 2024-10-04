---
title: NATS Adaptive Deployment Architectures
---

NATS offers flexible deployment options, from a single server to a global 
super-cluster with leaf nodes, allowing you to scale and adapt as needed.

## Single Server

The simplest setup, with one lightweight, efficient `nats-server` process.
Clients connect to this server (e.g., "nats://localhost").

## Cluster 

For fault tolerance or increased capacity, you can cluster multiple
`nats-server` processes. Clients connect to any server in the cluster (e.g.,
"nats://server1", "nats://server2").

### Super-Cluster

For global deployments or disaster recovery, connect multiple clusters via
gateway connections. Clients connect to servers in any cluster (e.g.,
"nats://us-west-1.company.com", "nats://us-west-2.company.com").

### Leaf Nodes

Extend your NATS deployment with local leaf node servers that route traffic to
the main cluster or super-cluster. Leaf nodes can service specific locations,
edge devices, VPCs, or even individual applications. They support WebSocket
connections and can operate independently during cluster disconnections.
JetStream can be enabled on leaf nodes to mirror local streams to upstream
clusters.

In all cases, NATS scales easily to meet your evolving needs.
