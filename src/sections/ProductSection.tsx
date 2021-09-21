import ProductCard from '../component/ProductCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../interfaces/Index';

interface ProductSectionProps {
	products: Product[];
	addToCart: (clickedItem: Product) => void;
}

const ProductSection = (props: ProductSectionProps): JSX.Element => {
	const renderCard = props.products.map((item): JSX.Element => {
		return (
			<ProductCard key={item.id} product={item} addToCart={props.addToCart} />
		);
	});

	return <section className='wrapper card-wrap'>{renderCard}</section>;
};

export default ProductSection;
