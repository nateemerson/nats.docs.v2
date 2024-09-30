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
						{ label: 'Welcome', slug: 'welcome' },
					],
				},
				{
					label: 'Deploy',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Welcome', slug: 'welcome' },
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
