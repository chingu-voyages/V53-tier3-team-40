import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import NavLinks from "./NavLinks";

const Menu = ({ className }) => {
  const [isOpen, setisOpen] = useState(false);

  const handleMenuToggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <nav className={className}>
      <div className="hidden md:flex">
        <NavLinks />
      </div>
      <div
        className="md:hidden flex flex-col space-y-2 cursor-pointer"
        onClick={handleMenuToggle}
      >
        <BurgerMenu isOpen={isOpen} />
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden absolute top-16 right-[-20%] w-[100vw] bg-gray-100 shadow-lg flex-col items-center gap-8 p-8`}
      >
        <NavLinks />
      </div>
    </nav>
  );
};

export default Menu;
