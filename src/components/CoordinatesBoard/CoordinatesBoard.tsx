import type React from 'react';

import { Axes } from './components';

import css from './styles.module.css';

export const CoordinatesBoard: React.FC<React.PropsWithChildren> = ({
	children,
}) => (
	<div className={css.coordinates_board}>
		<Axes />
		{children}
	</div>
);
