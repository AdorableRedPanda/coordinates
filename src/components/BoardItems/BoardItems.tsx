import type { ID, StoreItem, Position } from '@/types';
import { DndNode } from './components';
import { Avatar } from '../Avatar';
import type React from 'react';

interface Props {
	items: StoreItem[];
	onUpdate: (key: ID, position: Position) => void;
}

export const BoardItems: React.FC<Props> = ({ items, onUpdate }) => {
	const onStop = (key: ID) => (position: Position) => onUpdate(key, position);

	return (
		<>
			{items.map((item) => (
				<DndNode position={item} key={item.id} onStop={onStop(item.id)}>
					<Avatar label={item.label} img={item.img} />
				</DndNode>
			))}
		</>
	);
};
