import type React from 'react';
import { useRef } from 'react';
import type { Position } from '@/types';

import css from './styles.module.css';
import Draggable, { type DraggableEventHandler } from 'react-draggable';

interface Props extends React.PropsWithChildren {
	position: Position;
	onStop: (position: Position) => void;
}

export const DndNode: React.FC<Props> = ({ children, position, onStop }) => {
	const nodeRef = useRef<HTMLDivElement>(null);

	const onDragStop: DraggableEventHandler = (_, { x, y }) => onStop({ x, y });

	return (
		<Draggable
			onStop={onDragStop}
			nodeRef={nodeRef}
			defaultPosition={position}
			bounds="parent"
		>
			<div ref={nodeRef} className={css.dnd}>
				{children}
			</div>
		</Draggable>
	);
};
