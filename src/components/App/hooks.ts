import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import type { ItemCreatePayload } from '@/types';

const DEFAULT_COLLECTION: string = import.meta.env.VITE_DEFAULT_COLLECTION;

export const useRoomParam = () => {
	const [searchParams] = useSearchParams();
	return searchParams.get('room') ?? DEFAULT_COLLECTION;
};

export const useCreateNew = (
	addItem: (data: ItemCreatePayload) => Promise<unknown>,
) => {
	const [open, setOpen] = useState(false);

	const [loading, setLoading] = useState(false);

	const onClose = () => setOpen(false);

	const onSubmit = async (data: ItemCreatePayload) => {
		setLoading(true);
		try {
			await addItem(data);
		} catch (e) {
			console.error(e);
		} finally {
			setLoading(false);
			setOpen(false);
		}
	};

	const openForm = () => setOpen(true);

	return { loading, open, onClose, onSubmit, openForm };
};
