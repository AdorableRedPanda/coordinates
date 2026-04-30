import type React from 'react';
import css from './styles.module.css';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
	<div className={css.app}>
		<header className={css.header}>coordinates</header>
		<main className={css.main}>{children}</main>
	</div>
);
