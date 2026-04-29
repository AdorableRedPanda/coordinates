export interface ItemData extends Record<string, string> {
	label: string;
	img: string;
}

export interface Position {
	x: number;
	y: number;
}

export type ID = string;

export interface BoardNode {
	data: ItemData;
	position: Position;
	id: ID;
	type: 'node';
}

export type StoreItem = [Position, ItemData];
