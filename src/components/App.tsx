import { useInstantDb } from '@/db';
import { useSearchParams } from 'react-router-dom';

import { CoordinatesBoard } from './CoordinatesBoard';
import { Layout } from './Layout';
import { BoardItems } from './BoardItems';

const DEFAULT_COLLECTION: string = import.meta.env.VITE_DEFAULT_COLLECTION

const useRoomParam = () => {
	const [searchParams] = useSearchParams();
	return searchParams.get('room') ?? DEFAULT_COLLECTION;
}

export function App() {
	const collection = useRoomParam()
	const { loading, items, onChange } = useInstantDb(collection);

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
