import { createContext } from 'react';
import { CartItem } from '../App';

interface CartContext {
  isCartVisible: boolean;
  setIsCartVisible: (state: boolean) => void;
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
}

const CartContext = createContext<CartContext>({} as CartContext);

export default CartContext;
