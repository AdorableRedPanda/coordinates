import { CoordinatesBoard } from './CoordinatesBoard';

import { Store } from '@/constants';
import { Layout } from './Layout';
import { BoardItems } from './BoardItems';

import {useLogState, useStore} from '@/hooks';

export function App() {
	const { state, onChange } = useStore(Store);
	useLogState(state);

	return (
		<Layout>
			<CoordinatesBoard>
				<BoardItems onUpdate={onChange} items={state} />
			</CoordinatesBoard>
		</Layout>
	);
}
