import { createContext } from 'react';

const CartContext = createContext({
  hidden: true,
  toggleHideen: () => {},
});

export default CartContext;
