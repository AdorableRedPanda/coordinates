import { init, i } from '@instantdb/react';

const APP_ID = import.meta.env.VITE_INSTANT_APP_ID as string;

const schema = i.schema({
	entities: {
		items: i.entity({
			label: i.string(),
			img: i.string(),
			x: i.number(),
			y: i.number(),
			collection: i.string(),
		}),
		collections: i.entity({
			name: i.string(),
		}),
	},
	links: {
		collectionItems: {
			forward: { on: 'items', has: 'one', label: 'collection' },
			reverse: { on: 'collections', has: 'many', label: 'items' },
		},
	},
});

export const db = init({ appId: APP_ID, schema });
