import { Product } from '../interfaces/Index';
import Button from './Button';

interface AppProps {
	product: Product;
	addToCart: (clickedItem: Product) => void;
	key: number;
}
const ProductCard = (props: AppProps): JSX.Element => {
	const { image, title, price } = props.product;

	return (
		<div className='card'>
			<div className='img-wrapper'>
				<img src={image} alt={title} loading='lazy' height='300' width='325' />
			</div>
			<div className='card-content'>
				<h4>{title}</h4>
				<p>${price}</p>
				<Button
					buttonText='Add to Cart'
					fn={() => props.addToCart(props.product)}
					buttonClass='btn'
					aria={`Add ${title} to cart`}
				/>
			</div>
		</div>
	);
};

export default ProductCard;
