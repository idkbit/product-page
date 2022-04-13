import { useState } from 'react';
import { Gallery, Header, Info, Sidemenu } from './components';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className='container m-auto'>
        <Header toggleMenu={toggleMenu} />
        <div className='flex mt-20 md:px-20'>
          <Gallery />
          <Info />
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
