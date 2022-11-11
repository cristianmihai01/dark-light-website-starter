import React, { useState, useEffect } from 'react';
// import logo
import LogoDark from '../assets/img/logo-dark.svg';
import LogoWhite from '../assets/img/logo-white.svg';
// import icons
import { BsFillSunFill, BsMoonFill, BsCheck } from 'react-icons/bs';
// import image
import GirlImg from '../assets/img/girl.png';

const Hero = () => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const html = document.querySelector('html');
    if (theme === 'dark') {
      html.classList.add('dark');
      setTheme('dark');
    } else {
      html.classList.remove('dark');
      setTheme('light');
    }
  }, [theme]);
  return (
    <section className='min-h-[740px] bg-hero w-full bg-cover bg-center bg-no-repeat overflow-hidden dark:bg-none dark:bg-dark'>
      <div className='container mx-auto'>
        {/* header */}
        <header>header</header>
        {/* text & image wrapper */}
        <div>
          <div>text</div>
          <div>image</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
