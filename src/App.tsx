import { useState } from 'react';
import { Gallery, Header, Info, Sidemenu } from './components';

export interface CartItem {
  amount: number;
  product: string;
  price: number;
  img: string;
  id: string;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className='container m-auto' onClick={() => setIsCartVisible(false)}>
        <Header
          isCartVisible={isCartVisible}
          setIsCartVisible={setIsCartVisible}
          toggleMenu={toggleMenu}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
        <div className='flex flex-col lg:flex-row mt-20 lg:px-20'>
          <Gallery />
          <Info setCartItems={setCartItems} cartItems={cartItems} />
        </div>
      </div>

      <Sidemenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div
        onClick={toggleMenu}
        className={
          isMenuOpen
            ? 'absolute w-full  min-h-screen bg-lightboxBG top-0 left-0'
            : 'hidden'
        }
      ></div>
    </>
  );
}

export default App;
