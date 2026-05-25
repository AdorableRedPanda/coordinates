import { forwardRef } from 'react';
import type React from 'react';
import css from './styles.module.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export const FormInput = forwardRef<HTMLInputElement, Props>(
	({ label, ...inputProps }, ref) => (
		<label className={css.field}>
			{label}
			<input ref={ref} className={css.input} {...inputProps} />
		</label>
	),
);
