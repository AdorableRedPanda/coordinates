import { CoordinatesBoard } from '../CoordinatesBoard';

import css from './styles.module.css';

export function App() {
	return (
		<div className={css.app}>
			<header className={css.header}>coordinates</header>
			<main className={css.main}>
				<CoordinatesBoard />
			</main>
		</div>
	);
}
