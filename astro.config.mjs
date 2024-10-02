// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Overview', slug: 'overview' },
						{ label: 'Quickstart', slug: 'quickstart' },
						{ label: 'NATS Fundamentals', slug: 'fundamentals' },
					],
				},
				{
					label: 'Development',
					items: [
						{ label: 'Connecting', slug: 'development/connecting' },
						{ label: 'Messaging', slug: 'development/messaging' },
						{ label: 'Streaming', slug: 'development/streaming' },
						{ label: 'Key-Value', slug: 'development/key-value' },
						{ label: 'Object Store', slug: 'development/object-store' },
						{ label: 'Services', slug: 'development/services' },
						{ label: 'Security', slug: 'development/security' },
					],
				},
				{
					label: 'Architecture',
					items: [
						{ label: 'Application', slug: 'architecture/application' },
						{ label: 'System', slug: 'architecture/system' },
					],
				},
				{
					label: 'Deployment',
					items: [
						{ label: 'Cloud', slug: 'deployment/cloud' },
						{ label: 'Edge', slug: 'deployment/edge' },
						{ label: 'Kuberenetes', slug: 'deployment/kubernetes' },
						{ label: 'Containers', slug: 'deployment/containers' },
						{ label: 'Bare Metal', slug: 'deployment/bare-metal' },
					],
				},
				{
					label: 'Operations',
					items: [
						{ label: 'Monitoring', slug: 'operations/monitoring' },
						{ label: 'Security', slug: 'operations/security' },
						{ label: 'Updates', slug: 'operations/updates' },
						{ label: 'Disaster Recovery', slug: 'operations/disaster-recovery' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Server Config', slug: 'reference/server-config' },
						{ label: 'Protocols', slug: 'reference/protocols' },
					],
				},
			],
		}),
	],
});
