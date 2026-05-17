import type React from 'react';
import css from './styles.module.css';

interface Props {
	label: string;
	img: string;
}

export const Avatar: React.FC<Props> = ({ img, label }) => (
	<div className={css.avatar_node}>
		<img draggable={false} src={img} alt={label} className={css.avatar} />
		<span className={css.tooltip}>{label}</span>
	</div>
);
