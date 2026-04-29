import type { BoardNode, ID, StoreItem } from '@/types';

export const storeToBoard = (
	id: ID,
	[position, data]: StoreItem,
): BoardNode => ({ id, position, data, type: 'node' });
