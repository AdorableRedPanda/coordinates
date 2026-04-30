export interface ItemData extends Record<string, string> {
	label: string;
	img: string;
}

export interface Position {
	x: number;
	y: number;
}

export type ID = string;

export interface BoardPoint<TData> {
	position: Position;
	data: TData;
}

export type ItemsStore = Record<ID, BoardPoint<ItemData>>;
