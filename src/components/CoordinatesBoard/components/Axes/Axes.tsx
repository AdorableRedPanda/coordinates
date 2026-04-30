import css from './styles.module.css';

const SIZE = 800;
const PAD = 20;
const CENTER = SIZE / 2;
const TICKS = [100, 200, 300, 400, 500, 600, 700];

function Arrow({
	x,
	y,
	dir,
}: {
	x: number;
	y: number;
	dir: 'right' | 'left' | 'up' | 'down';
}) {
	const A = 8,
		B = 4;
	const pts: Record<typeof dir, string> = {
		right: `${x + A},${y} ${x},${y - B} ${x},${y + B}`,
		left: `${x - A},${y} ${x},${y - B} ${x},${y + B}`,
		up: `${x},${y - A} ${x - B},${y} ${x + B},${y}`,
		down: `${x},${y + A} ${x - B},${y} ${x + B},${y}`,
	};
	return <polygon points={pts[dir]} />;
}

export const Axes = () => {
	const x0 = PAD,
		x1 = SIZE - PAD;
	const y0 = PAD,
		y1 = SIZE - PAD;
	return (
		<svg role="presentation" className={css.axes} width={SIZE} height={SIZE}>
			<line x1={x0} y1={CENTER} x2={x1} y2={CENTER} />
			<Arrow x={x1} y={CENTER} dir="right" />
			<Arrow x={x0} y={CENTER} dir="left" />
			<line x1={CENTER} y1={y0} x2={CENTER} y2={y1} />
			<Arrow x={CENTER} y={y0} dir="up" />
			<Arrow x={CENTER} y={y1} dir="down" />
			{TICKS.map((t) => (
				<line key={`x${t}`} x1={t} y1={CENTER - 4} x2={t} y2={CENTER + 4} />
			))}
			{TICKS.map((t) => (
				<line key={`y${t}`} x1={CENTER - 4} y1={t} x2={CENTER + 4} y2={t} />
			))}
		</svg>
	);
};
