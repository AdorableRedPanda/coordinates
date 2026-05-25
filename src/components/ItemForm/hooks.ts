import type { ItemCreatePayload } from '@/types';
import React, { useEffect } from 'react';
import { useState } from 'react';

const EMPTY: ItemCreatePayload = { label: '', img: '', x: 0, y: 0 };

type FormFields = keyof ItemCreatePayload;

const parseValue = (field: FormFields, value: string) => {
	if (field === 'x' || field === 'y') {
		const num = Number(value);
		return Number.isNaN(num) ? 0 : num;
	}

	return value;
};

export const useForm = (
	onSubmit: (payload: ItemCreatePayload) => void,
	onCancel: () => void,
) => {
	const [form, setForm] = useState(EMPTY);
	const update =
		(field: FormFields) => (e: React.ChangeEvent<HTMLInputElement>) =>
			setForm((prev) => ({
				...prev,
				[field]: parseValue(field, e.target.value),
			}));

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!form.label.trim()) {
			return;
		}
		onSubmit({ ...form, label: form.label.trim(), img: form.img.trim() });
		setForm(EMPTY);
	};

	const handleCancel = () => {
		setForm(EMPTY);
		onCancel();
	};

	return { form, setForm, update, handleSubmit, handleCancel };
};

export const useInputFocus = (show: boolean) => {
	const input = React.useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (show) {
			input.current?.focus();
		}
	}, [show]);

	return { ref: input };
};
