import { useInstantDb } from '@/db';

import { CoordinatesBoard } from './CoordinatesBoard';
import { Layout } from './Layout';
import { BoardItems } from './BoardItems';

const COLLECTION: string = import.meta.env.VITE_DEFAULT_COLLECTION

export function App() {
	const { loading, items, onChange } = useInstantDb(COLLECTION);

	if (loading) {
		return 'Loading...';
	}

	return (
		<Layout>
			<CoordinatesBoard>
				<BoardItems onUpdate={onChange} items={items} />
			</CoordinatesBoard>
		</Layout>
	);
}
