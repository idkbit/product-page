import { createContext } from 'react';

interface CartContext {
  isCartVisible: boolean;
  setIsCartVisible: (state: boolean) => void;
}

const CartContext = createContext<CartContext>({} as CartContext);

export default CartContext;
