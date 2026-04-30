import { CoordinatesBoard } from './CoordinatesBoard';

import { STORAGE_LS_KEY, Store } from '@/constants';
import { Layout } from './Layout';
import { BoardItems } from './BoardItems';

import { useWithLS, useStore } from '@/hooks';

const loadStore = <TValue,>(defaultValue: TValue): TValue => {
	const ls = window.localStorage.getItem(STORAGE_LS_KEY);

	if (!ls) {
		return defaultValue;
	}

	try {
		return JSON.parse(ls);
	} catch (e) {
		console.error('Failed to parse localStorage', e);
	}

	return defaultValue;
};

export function App() {
	const { state, onChange } = useStore(() => loadStore(Store));

	useWithLS(state);

	return (
		<Layout>
			<CoordinatesBoard>
				<BoardItems onUpdate={onChange} items={state} />
			</CoordinatesBoard>
		</Layout>
	);
}
