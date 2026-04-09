import { useState } from "react";
import HeaderLogo from "./header-logo";
import HeaderMenu from "./header-menu";
import HeaderSearch from "./header-search";
import HeaderNav from "./header-nav";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleToggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="px-5 py-3 flex justify-between items-center shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
      <HeaderMenu />
      <div className={`${isSearchOpen ? "hidden tablet:block" : "block"}`}>
        <HeaderLogo />
      </div>
      <div
        className={`flex items-center gap-4 ${isSearchOpen && "w-full"} desktop:gap-6`}
      >
        <HeaderSearch
          isSearchOpen={isSearchOpen}
          onToggleSearch={handleToggleSearch}
        />
        <HeaderNav
          containerProps={{
            className: "hidden tablet:flex justify-center gap-7",
          }}
        />
      </div>
    </header>
  );
}
