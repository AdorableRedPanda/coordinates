import type React from 'react';
import css from './styles.module.css';

interface Props extends React.PropsWithChildren {
	onAdd: () => void;
}

export const Layout: React.FC<Props> = ({ children, onAdd }) => (
	<div className={css.layout}>
		<header className={css.header}>
			coordinates
			<button onClick={onAdd} type="button" className={css.new_button}>
				New item
			</button>
		</header>
		<main className={css.main}>{children}</main>
	</div>
);
