import { useInstantDb } from '@/db';

import { CoordinatesBoard } from '../CoordinatesBoard';
import { Layout } from '../Layout';
import { BoardItems } from '../BoardItems';
import { ItemForm } from '@/components/ItemForm';

import { useCreateNew, useRoomParam } from './hooks';

export function App() {
	const collection = useRoomParam();
	const { loading, items, onChange, onCreate } = useInstantDb(collection);
	const {
		onClose,
		loading: creating,
		open,
		onSubmit,
		openForm,
	} = useCreateNew(onCreate);

	if (loading) {
		return 'Loading...';
	}

	return (
		<Layout onAdd={openForm}>
			<ItemForm
				loading={creating}
				onCancel={onClose}
				onSubmit={onSubmit}
				show={open}
			/>
			<CoordinatesBoard>
				<BoardItems onUpdate={onChange} items={items} />
			</CoordinatesBoard>
		</Layout>
	);
}
