// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'NATS Docs',
      logo: {
        src: './src/assets/nats.svg'
      },
			social: {
				github: 'https://github.com/nats-io/',
				twitter: 'https://x.com/nats_io',
			},
			sidebar: [
				{
					label: 'Introduction',
          collapsed: true,
					items: [
						{ label: 'Overview', slug: 'overview' },
						{ label: 'Quickstart', slug: 'quickstart' },
						{ label: 'Use Cases', slug: 'use-cases' },
						{ label: 'Clients', slug: 'clients' },
						{ label: 'Concepts', slug: 'concepts' },
					],
				},
				{
					label: 'Development',
          collapsed: true,
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
          collapsed: true,
					items: [
						{ label: 'Application', slug: 'architecture/application' },
						{ label: 'System', slug: 'architecture/system' },
						{ label: 'Topology', slug: 'architecture/topology' },
						{ label: 'Asset Placement', slug: 'architecture/asset-placement' },
					],
				},
				{
					label: 'Deployment',
          collapsed: true,
					items: [
						{ label: 'Deployment Options', slug: 'deployment/options' },
						{ label: 'systemd', slug: 'deployment/systemd' },
						{ label: 'Kubernetes/k3s', slug: 'deployment/kubernetes' },
						{ label: 'Docker/podman', slug: 'deployment/docker' },
					],
				},
				{
					label: 'Operations',
          collapsed: true,
					items: [
						{ label: 'Monitoring', slug: 'operations/monitoring' },
						{ label: 'Security', slug: 'operations/security' },
						{ label: 'Updates', slug: 'operations/updates' },
						{ label: 'Disaster Recovery', slug: 'operations/disaster-recovery' },
					],
				},
				{
					label: 'Reference',
          collapsed: true,
					items: [
						{ label: 'Server Config', slug: 'reference/server-config' },
						{ label: 'Protocols', slug: 'reference/protocols' },
					],
				},
			],
		}),
	],
});
