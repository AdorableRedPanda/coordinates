import type React from 'react';
import css from './styles.module.css';

interface Props {
	loading: boolean;
}

export const FormButtons: React.FC<Props> = ({ loading }) => (
	<div className={css.form_buttons}>
		<button type="reset" className={css.cancel}>
			Cancel
		</button>
		<button type="submit" className={css.submit} disabled={loading}>
			{loading ? 'Adding…' : 'Add'}
		</button>
	</div>
);
