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
					],
				},
				{
					label: 'Configure',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'JetStream', slug: 'welcome', items: [ { label: 'Streams', slug: 'welcome'} ] },
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
