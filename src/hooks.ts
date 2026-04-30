import {useEffect, useRef, useState} from 'react';
import type { ID, ItemsStore, Position } from '@/types';

type UpdateCb = (key: ID, position: Position) => void;

export const useStore = (initial: ItemsStore) => {
	const [state, setState] = useState<ItemsStore>(initial);

	const onChange: UpdateCb = (key, position) =>
		setState((prev) => ({ ...prev, [key]: { ...prev[key], position } }));

	return { state, onChange };
};


export const useLogState = <T>(state: T) => {
	const timer = useRef<number>(null);

	const log = () => {
		console.clear();
		console.log(state);
	}

	useEffect(() => {
		if (timer.current) { window.clearTimeout(timer.current) }
		timer.current = window.setTimeout(log, 1000);


	}, [state])
}