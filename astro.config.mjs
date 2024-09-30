// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'NATS.io Docs V2',
			social: {
				github: 'https://github.com/nats-io/nats.docs',
        twitter: 'https://x.com/nats_io'
			},
			sidebar: [
				{
					label: 'Get Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Welcome', slug: 'welcome' },
						{ label: 'Overview', items: [
              { label: 'NATS Overview', slug: 'overview' },
              { label: 'Compare', slug: 'nats-concepts/overview/compare-nats' },
            ] },
            { label: 'What is NATS', items: [
              { label: 'What is NATS?', slug: 'nats-concepts/what-is-nats/readme' },
              { label: 'Walkthrough Setup', slug: 'nats-concepts/what-is-nats/walkthrough\_setup' },
            ] },
            { label: 'Subject-Based Messaging', slug: 'nats-concepts/subjects'},
            { label: 'Core NATS', items: [
              { label: 'Core NATS', slug: 'nats-concepts/core-nats/readme' },
              { label: 'Publish-Subscribe', items: [
                { label: 'Publish-Subscribe', slug: 'nats-concepts/core-nats/publish-subscribe/pubsub'},
                { label: 'Pub/Sub Walkthrough', slug: 'nats-concepts/core-nats/publish-subscribe/pubsub\_walkthrough' },
              ]},
              { label: 'Request-Reply', items: [
                { label: 'Request-Reply', slug: 'nats-concepts/core-nats/request-reply/reqreply'},
                { label: 'Request-Reply Walkthrough', slug: 'nats-concepts/core-nats/request-reply/reqreply\_walkthrough' },
              ]},
              { label: 'Queue Groups', items: [
                { label: 'Queue Groups', slug: 'nats-concepts/core-nats/queue-groups/queue'},
                { label: 'Queueing Walkthrough', slug: 'nats-concepts/core-nats/queue-groups/queues\_walkthrough' },
              ]},
            ] },
					],
				},
				{
					label: 'Configure',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'JetStream', items: [
              { label: 'JetStream', slug: 'nats-concepts/jetstream/readme'},
              { label: 'Streams', slug: 'nats-concepts/jetstream/streams'},
              { label: 'Source and Mirror Streams', items: [
                { label: 'Source and Mirror Streams', slug: 'nats-concepts/jetstream/source\_and\_mirror' },
                { label: 'Example', slug: 'nats-concepts/jetstream/source\_and\_mirror\_example' },
              ]},
              { label: 'Consumers', items: [
                { label: 'Consumers', slug: 'nats-concepts/jetstream/consumers' },
                { label: 'Example', slug: 'nats-concepts/jetstream/example\_configuration' },
              ]},
              { label: 'JetStream Walkthrough', slug: 'nats-concepts/jetstream/js\_walkthrough' },
              { label: 'Key/Value Store', items: [
                { label: 'Key/Value Store', slug: 'nats-concepts/jetstream/key-value-store/readme' },
                { label: 'Key/Value Store Walkthrough', slug: 'nats-concepts/jetstream/key-value-store/kv\_walkthrough' },
              ]},
              { label: 'Object Store', items: [
                { label: 'Object Store', slug: 'nats-concepts/jetstream/object-store/obj\_store' },
                { label: 'Object Store Walkthrough', slug: 'nats-concepts/jetstream/object-store/obj\_walkthrough' },
              ]},
              { label: 'Headers', slug: 'nats-concepts/jetstream/headers'}
            ] },
            { label: 'Subject Mapping and Partitioning', slug: 'nats-concepts/subject\_mapping'},
            { label: 'NATS Service Infrastructure', items: [
              { label: 'NATS Service Infrastructure', slug: 'nats-concepts/service\_infrastructure'},
              { label: 'NATS Adaptive Deployment Architectures', slug: 'nats-concepts/adaptive\_edge\_deployment'},
            ]},
					],
				},
				{
					label: 'Secure',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Security', slug: 'nats-concepts/security' },
            { label: 'Connecting', items: [
              { label: 'Authenticating with a User and Password', slug: 'using-nats/developing-with-nats/connecting/security/userpass'},
              { label: 'Authenticating with a Token', slug: 'using-nats/developing-with-nats/connecting/security/token'},
              { label: 'Authenticating with an NKey', slug: 'using-nats/developing-with-nats/connecting/security/nkey'},
              { label: 'Authenticating with a Credentials File', slug: 'using-nats/developing-with-nats/connecting/security/creds'},
              { label: 'Encrypting Connections with TLS', slug: 'using-nats/developing-with-nats/connecting/security/tls'},
              { label: 'Setting a Connect Timeout', slug: 'using-nats/developing-with-nats/connecting/connect\_timeout'},
            ]},
						{ label: 'Host Services', slug: 'nex/host\_services/readme' },
            { label: 'Securing Nats', items: [
              { label: 'Enabling TLS', slug: 'running-a-nats-service/configuration/securing\_nats/tls'},
              { label: 'Authentication', items: [
                { label: 'Tokens', slug: 'running-a-nats-service/configuration/securing\_nats/auth\_intro/tokens' },
                { label: 'Username/Password', slug: 'running-a-nats-service/configuration/securing\_nats/auth\_intro/username\_password' },
                { label: 'TLS Authentication', items: [
                  { label: 'TLS Authentication', slug: 'running-a-nats-service/configuration/securing\_nats/auth\_intro/tls\_mutual\_auth' },
                  { label: 'TLS Authentication in Clusters', slug: 'running-a-nats-service/configuration/clustering/cluster\_tls' },
                ]},
                { label: 'NKeys', slug: 'running-a-nats-service/configuration/securing\_nats/auth\_intro/nkey\_auth' },
                { label: 'Authentication Timeout', slug: 'running-a-nats-service/configuration/securing\_nats/auth\_intro/auth\_timeout' },
                { label: 'Decentralized JWT Authentication/Authorization', items: [
                  { label: 'Decentralized JWT Authentication/Authorization', slug: 'running-a-nats-service/configuration/securing\_nats/jwt/readme' },
                  { label: 'Account lookup using Resolver', slug: 'running-a-nats-service/configuration/securing\_nats/jwt/resolver' },
                  { label: 'Memory Resolver Tutorial', slug: 'running-a-nats-service/configuration/securing\_nats/jwt/mem\_resolver' },
                  { label: 'Mixed Authentication/Authorization Setup', slug: 'running-a-nats-service/configuration/securing\_nats/jwt/jwt\_nkey\_auth' },
                ]},
              ]},
              { label: 'Authorization', slug: 'running-a-nats-service/configuration/securing\_nats/authorization' },
              { label: 'Multi Tenancy using Accounts', slug: 'running-a-nats-service/configuration/securing\_nats/accounts' },
              { label: 'OCSP Stapling', slug: 'running-a-nats-service/configuration/ocsp' },
              { label: 'Auth Callout', slug: 'running-a-nats-service/configuration/securing\_nats/auth\_callout' },
            ]},
            { label: 'System Events', items: [
              { label: 'System Events', slug: 'running-a-nats-service/configuration/sys\_accounts/readme'},
              { label: 'System Events & Decentralized JWT Tutorial', slug: 'running-a-nats-service/configuration/sys\_accounts/sys\_accounts'},
            ]},
            { label: 'WebSocket', slug: 'running-a-nats-service/configuration/websocket/readme'},
            { label: 'JetStream', items: [
              { label: 'Disaster Recovery', slug: 'running-a-nats-service/nats\_admin/jetstream\_admin/disaster\_recovery' },
              { label: 'Encryption at Rest', slug: 'running-a-nats-service/nats\_admin/jetstream\_admin/encryption\_at\_rest' },
            ]},
            { label: 'Managing JWT Security', items: [
              { label: 'Managing JWT Security', slug: 'running-a-nats-service/nats\_admin/security' },
              { label: 'In Depth JWT Guide', slug: 'running-a-nats-service/nats\_admin/jwt' },
            ]},
        ]},
				{
					label: 'Deploy',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What\'s New', items: [
              { label: 'What\'s New', slug: 'release\_notes/whats\_new' },
              { label: 'NATS 2.10', slug: 'release\_notes/whats\_new\_210' },
              { label: 'NATS 2.2', slug: 'release\_notes/whats\_new\_22' },
              { label: 'NATS 2.0', slug: 'release\_notes/whats\_new\_20' },
            ]},
            { label: 'NEX', items: [
              { label: 'Installing NEX', slug: 'nex/getting-started/installing' },
              { label: 'Deploying Services', slug: 'nex/getting-started/deploying-services' },
              { label: 'Deploying Functions', slug: 'nex/getting-started/deploying-functions' },
            ]},
            { label: 'NATS server', items: [
              { label: 'Installing, running and deploying a NATS Server', slug: 'running-a-nats-service/introduction' },
              { label: 'Installing a NATS server', slug: 'running-a-nats-service/installation' },
              { label: 'Running and deploying a NATS server', slug: 'running-a-nats-service/running/readme' },
              { label: 'Windows Service', slug: 'running-a-nats-service/running/windows\_srv' },
            ]},
            { label: 'Kubernetes', items: [
              { label: 'NATS and Kubernetes', slug: 'running-a-nats-service/nats-on-kubernetes/nats-kubernetes' },
              { label: 'Kubernetes Controller', slug: 'running-a-nats-service/configuration/jetstream-config/configuration\_mgmt/kubernetes\_controller' },
            ]},
					],
				},
				{
					label: 'Monitor',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Welcome', slug: 'welcome' },
					],
				},
				{
					label: 'Operate',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Welcome', slug: 'welcome' },
					],
				},
				{
					label: 'Develop',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Welcome', slug: 'welcome' },
					],
				},
			],
		}),
	],
});
