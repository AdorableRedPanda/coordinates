import { useState } from 'react';
import type { ID, ItemsStore, Position } from '@/types';

type UpdateCb = (key: ID, position: Position) => void;

export const useStore = (initial: ItemsStore) => {
	const [state, setState] = useState<ItemsStore>(initial);

	const onChange: UpdateCb = (key, position) =>
		setState((prev) => ({ ...prev, [key]: { ...prev[key], position } }));

	return { state, onChange };
};
