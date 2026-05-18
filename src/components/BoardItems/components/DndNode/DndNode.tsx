import type React from 'react';
import { useRef, useState, useEffect } from 'react';
import type { Position } from '@/types';

import css from './styles.module.css';
import Draggable, { type DraggableEventHandler } from 'react-draggable';

interface Props extends React.PropsWithChildren {
	position: Position;
	onStop: (position: Position) => void;
}

export const DndNode: React.FC<Props> = ({ children, position, onStop }) => {
	const nodeRef = useRef<HTMLDivElement>(null);
	const [localPosition, setLocalPosition] = useState<Position>(position);
	const isDragging = useRef(false);

	// todo: avoid useEffect, use position as source of truth
	useEffect(() => {
		if (!isDragging.current) {
			setLocalPosition(position);
		}
	}, [position.x, position.y]);

	const onDragStart: DraggableEventHandler = () => {
		isDragging.current = true;
	};

	const onDrag: DraggableEventHandler = (_, { x, y }) => {
		setLocalPosition({ x, y });
	};

	const onDragStop: DraggableEventHandler = (_, { x, y }) => {
		isDragging.current = false;
		onStop({ x, y });
	};

	return (
		<Draggable
			onStart={onDragStart}
			onDrag={onDrag}
			onStop={onDragStop}
			nodeRef={nodeRef}
			position={localPosition}
			bounds="parent"
		>
			<div ref={nodeRef} className={css.dnd}>
				{children}
			</div>
		</Draggable>
	);
};
