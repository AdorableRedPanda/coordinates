import { db } from './db';
import type { ID, StoreItem, Position } from '@/types';

export const useInstantDb = (collection: ID) => {
	const { isLoading: loading, data } = db.useQuery({
		items: { $: { where: { collection } } },
	});

	const onChange = (key: ID, position: Position) =>
		db.transact(db.tx.items[key].update({ x: position.x, y: position.y }));

	const items: StoreItem[] = data?.items || [];

	return { loading, items, onChange };
};
