import type React from 'react';

import type { ItemCreatePayload } from '@/types';

import { useForm, useInputFocus } from './hooks';
import css from './styles.module.css';
import { FormButtons, FormInput } from './components';

interface Props {
	onSubmit: (payload: ItemCreatePayload) => void;
	onCancel: () => void;
	show: boolean;
	loading: boolean;
}

const stopPropagation = (e: React.SyntheticEvent) => e.stopPropagation();

const onKeyDown = (onCancel: () => void) => (e: React.KeyboardEvent) => {
	e.stopPropagation();
	if (e.key === 'Escape') {
		onCancel();
	}
};

// biome-ignore lint/complexity/noExcessiveLinesPerFunction: потом посмотрю
export const ItemForm: React.FC<Props> = ({
	onSubmit,
	onCancel,
	show,
	loading,
}) => {
	const { handleCancel, form, update, handleSubmit } = useForm(
		onSubmit,
		onCancel,
	);
	const { ref } = useInputFocus(show);

	return (
		<div
			role="alertdialog"
			className={`${css.overlay} ${show ? css.visible : ''}`}
			onClick={handleCancel}
			onKeyDown={stopPropagation}
		>
			<div
				role="dialog"
				onKeyDown={onKeyDown(handleCancel)}
				className={css.dialog}
				onClick={stopPropagation}
			>
				<h2 className={css.title}>New item</h2>
				<form
					onReset={handleCancel}
					onSubmit={handleSubmit}
					className={css.form}
				>
					<FormInput
						ref={ref}
						label="Name"
						placeholder="Enter name"
						value={form.label}
						onChange={update('label')}
						required
					/>
					<FormInput
						label="Image URL"
						placeholder="https://…"
						value={form.img}
						onChange={update('img')}
					/>
					<div className={css.coordinates}>
						<FormInput
							label="X"
							type="number"
							value={form.x}
							onChange={update('x')}
						/>
						<FormInput
							label="Y"
							type="number"
							value={form.y}
							onChange={update('y')}
						/>
					</div>
					<FormButtons loading={loading} />
				</form>
			</div>
		</div>
	);
};
