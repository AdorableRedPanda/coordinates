import type React from 'react';
import css from './styles.module.css';
import type { ItemData } from '@/types';

interface Props {
	data: ItemData;
}

export const AvatarNode: React.FC<Props> = ({ data: { img, label } }) => (
	<div className={css.board_node}>
		<img src={img} alt={label} className={css.avatar} />
		<span className={css.tooltip}>{label}</span>
	</div>
);
