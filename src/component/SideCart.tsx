import { Product } from '../interfaces/Index';
import { useEffect, useState } from 'react';
import basketCart from '../images/basketCart.png';
import CartItem from './CartItem';

interface SideCarProps {
	cartItems: Product[];
	addToCart: (clickedItem: Product) => void;
	removeFromCart: (id: number) => void;
}
const SideCart = (props: SideCarProps): JSX.Element => {
	const [openCart, setOpenCart] = useState(false);
	const toggleCart = () => setOpenCart(!openCart);

	const listOfCartItems = props.cartItems.map((item) => {
		return (
			<CartItem
				key={item.id}
				item={item}
				removeFromCart={props.removeFromCart}
				addToCart={props.addToCart}
			/>
		);
	});
	const calculateTotal = (items: Product[]) => {
		return items.reduce(
			(acc: number, item) => acc + item.amount * item.price,
			0
		);
	};
	return (
		<>
			<div className='cart-icon-wrap wrapper'>
				<img
					width='30'
					height='30'
					onClick={toggleCart}
					src={basketCart}
					alt='open shopping cart'
				/>
			</div>
			<div className={openCart ? 'sidenav toggle' : 'sidenav'}>
				<button className='closebtn' onClick={toggleCart}>
					X
				</button>
				<h2>Your Shopping Cart</h2>
				{listOfCartItems}
				<h2 className="total">Total: ${calculateTotal(props.cartItems).toFixed(2)}</h2>
			</div>
		</>
	);
};

export default SideCart;
