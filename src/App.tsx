import { useState } from 'react';
import { Header, Sidemenu } from './components';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className='xl:max-w-7xl lg:max-w-4xl sm:max-w-2xl m-auto'>
        <Header toggleMenu={toggleMenu} />
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
