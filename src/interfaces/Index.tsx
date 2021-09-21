export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	amount: number;
	rating: Rating;
}

export interface Rating {
	rate: number;
	count: number;
}
