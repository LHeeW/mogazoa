import { useState } from "react";
import HamburgerMenuIcon from "../../assets/icons/hamburger_menu_icon.svg?react";
import HeaderNav from "./header-nav";

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <HamburgerMenuIcon
        className="w-6 h-6 cursor-pointer text-gray-9fa6b2 tablet:hidden"
        onClick={toggleMenu}
      />
      {isOpen && (
        <button
          onClick={toggleMenu}
          type="button"
          className="fixed top-0 left-0 w-screen h-screen bg-[rgba(200,200,200,0.8)] z-99 tablet:hidden"
        />
      )}
      <aside
        className={`flex flex-col fixed top-0 -left-full w-[33%] h-full gap-3 z-100 transition-[left] duration-300 ease-in-out bg-black-1c1c22 ${isOpen && "left-0"} tablet:hidden`}
      >
        <div className="self-end px-3">
          <button
            onClick={toggleMenu}
            type="button"
            aria-label="메뉴 닫기"
            className="p-1 text-white-f1f1f5 cursor-pointer"
          >
            X
          </button>
        </div>
        <HeaderNav
          containerProps={{ className: "flex flex-col gap-4 items-center" }}
        />
      </aside>
    </>
  );
}
