'use client';

//COMPONENETS
import * as Icons from '@/icons';

//UTILS
import React from 'react';

type Props = {};

export function Header({}: Props) {
  const [mobileMenuVisible, setMobileMenuVisible] = React.useState<boolean>(false);
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

  function changeMobileMenuVisibility() {
    setMobileMenuVisible(!mobileMenuVisible);
  }

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 64) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      data-mobilemenuvisibility={mobileMenuVisible}
      className={`w-full data-[mobilemenuvisibility=true]:shadow-xl backdrop-blur-xl h-16 data-[mobilemenuvisibility=true]:h-[20rem] data-[mobilemenuvisibility=true]:bg-white/80 fixed z-20 px-6 transition-all ${
        isScrolled ? 'bg-white/80 shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between h-16 items-center">
        <div>
          {mobileMenuVisible === true ? (
            <Icons.CgClose onClick={changeMobileMenuVisibility} className={`text-3xl text-primary`} />
          ) : (
            <Icons.BiMenu onClick={changeMobileMenuVisibility} className={`text-3xl ${isScrolled ? 'text-primary' : 'text-white'}`} />
          )}
        </div>
        <div>
          <h1
            data-mobilemenuvisibility={mobileMenuVisible}
            className={`data-[mobilemenuvisibility=true]:text-primary ${isScrolled ? 'text-primary' : 'text-white'}`}
          >
            Anna Gois Interiores
          </h1>
        </div>
      </div>
    </div>
  );
}
