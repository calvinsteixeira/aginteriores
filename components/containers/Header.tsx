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
      className={`w-full data-[mobilemenuvisibility=true]:shadow-md h-16 data-[mobilemenuvisibility=true]:h-[20rem] data-[mobilemenuvisibility=true]:bg-white fixed z-20 px-6 transition-all ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between h-16 items-center">
        <div>
          {mobileMenuVisible === true ? (
            <Icons.CgClose onClick={changeMobileMenuVisibility} className={`text-2xl text-foreground`} />
          ) : (
            <Icons.BiMenu onClick={changeMobileMenuVisibility} className={`text-2xl ${isScrolled ? 'text-foreground' : 'text-white'}`} />
          )}
        </div>
        <div>
          <h1
            data-mobilemenuvisibility={mobileMenuVisible}
            className={`data-[mobilemenuvisibility=true]:text-foreground ${isScrolled ? 'text-foreground' : 'text-white'}`}
          >
            Anna Gois Interiores
          </h1>
        </div>
      </div>
    </div>
  );
}
