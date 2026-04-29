import '@xyflow/react/dist/style.css';
import { CoordinatesBoard } from './components';
import css from './App.module.css';

function App() {
	return (
		<div className={css.app}>
			<header className={css.header}>coordinates</header>
			<main className={css.main}>
				<CoordinatesBoard />
			</main>
		</div>
	);
}

export default App;
