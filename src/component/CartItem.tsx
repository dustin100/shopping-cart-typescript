import { Product } from '../interfaces/Index';

type CartItemProps = {
	item: Product;
	addToCart: (clickedItem: Product) => void;
	key: number;
	removeFromCart: (id: number) => void;
};

const CartItem = (props: CartItemProps): JSX.Element => {
	return (
		<div className='cart-item-wrapper'>
			<div className='cart-item'>
				<h3>{props.item.title}</h3>
				<img src={props.item.image} alt={props.item.title} />
			</div>
			<div className='details'>
				<p>Price: ${props.item.price}</p>
				<p>Total: ${(props.item.amount * props.item.price).toFixed(2)}</p>
			</div>
			<div className='buttons'>
				<button onClick={() => props.removeFromCart(props.item.id)}>-</button>
				<p>{props.item.amount}</p>
				<button onClick={() => props.addToCart(props.item)}>+</button>
			</div>
		</div>
	);
};

export default CartItem;
