import type { ID, ItemsStore, Position } from '@/types';
import { DndNode } from './components';
import { Avatar } from '../Avatar';
import type React from 'react';

interface Props {
	items: ItemsStore;
	onUpdate: (key: ID, position: Position) => void;
}

export const BoardItems: React.FC<Props> = ({ items, onUpdate }) => {
	const keys = Object.keys(items);

	const onStop = (key: ID) => (position: Position) => onUpdate(key, position);

	return (
		<>
			{keys.map((key) => (
				<DndNode position={items[key].position} key={key} onStop={onStop(key)}>
					<Avatar data={items[key].data} />
				</DndNode>
			))}
		</>
	);
};
