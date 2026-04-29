import type React from 'react';
import css from './styles.module.css';
import { Background, MiniMap, ReactFlow, useNodesState } from '@xyflow/react';
import { AvatarNode } from '@/components';
import { Store } from '@/constants';
import { storeToBoard } from '@/utils';

const nodeTypes = {
	node: AvatarNode,
};

const initialNodes = Store.map((item, i) => storeToBoard(i.toString(), item));

export const CoordinatesBoard: React.FC = () => {
	const [nodes, _, onNodesChange] = useNodesState(initialNodes);

	return (
		<div className={css.coordinates_board}>
			<ReactFlow
				nodeTypes={nodeTypes}
				nodes={nodes}
				onNodesChange={onNodesChange}
			>
				<MiniMap />
				<Background />
			</ReactFlow>
		</div>
	);
};
