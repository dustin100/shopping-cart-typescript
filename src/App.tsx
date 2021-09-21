import { useEffect, useState } from 'react';
import Hero from './sections/Hero';
import ProductSection from './sections/ProductSection';
import './styles/App.scss';
import SideCart from './component/SideCart';
import { Product } from './interfaces/Index';
import axios from 'axios';

function App() {
	const url = 'https://fakestoreapi.com/products';
	const [productList, setProductList] = useState([] as Product[]);
	const [cartItems, setCartItems] = useState([] as Product[]);

	useEffect((): void => {
		const fetchItems = async (): Promise<void> => {
			const response = await axios.get(url);
			if (response) {
				setProductList(response.data);
			}
		};
		fetchItems();
	}, []);

	const handleAddToCart = (clickedItem: Product) => {
		setCartItems((prev) => {
			// 1. Is the item already added in the cart?
			const isItemInCart = prev.find((item) => item.id === clickedItem.id);

			if (isItemInCart) {
				return prev.map((item) =>
					item.id === clickedItem.id
						? { ...item, amount: item.amount + 1 }
						: item
				);
			}
			// First time the item is added
			return [...prev, { ...clickedItem, amount: 1 }];
		});
	};

	const handleRemoveFromCart = (id: number) => {
		setCartItems((prev) =>
			prev.reduce((acc, item) => {
				if (item.id === id) {
					if (item.amount === 1) return acc;
					return [...acc, { ...item, amount: item.amount - 1 }];
				} else {
					return [...acc, item];
				}
			}, [] as Product[])
		);
	};

	return (
		<>
			<header>
				<Hero />
			</header>
			<aside className='shopping-cart-aside'>
				<SideCart
					cartItems={cartItems}
					addToCart={handleAddToCart}
					removeFromCart={handleRemoveFromCart}
				/>
			</aside>
			<main>
				<ProductSection products={productList} addToCart={handleAddToCart} />
			</main>
		</>
	);
}

export default App;
