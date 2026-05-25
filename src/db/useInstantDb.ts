import { id } from '@instantdb/react';
import { db } from './db';
import type { ID, StoreItem, Position, ItemCreatePayload } from '@/types';

export const useInstantDb = (collection: ID) => {
	const { isLoading: loading, data } = db.useQuery({
		items: { $: { where: { collection } } },
	});

	const onChange = (key: ID, position: Position) =>
		db.transact(db.tx.items[key].update({ x: position.x, y: position.y }));

	const onCreate = (itemData: ItemCreatePayload) =>
		db.transact(db.tx.items[id()].update({ ...itemData, collection }));

	const items: StoreItem[] = data?.items || [];

	return { loading, items, onChange, onCreate };
};
