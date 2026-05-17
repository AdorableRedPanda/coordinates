export interface ItemData {
	label: string;
	img: string;
}

export interface Position {
	x: number;
	y: number;
}

export type ID = string;

export interface StoreItem extends Position, ItemData {
	id: ID;
}
