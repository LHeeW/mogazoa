import SearchIcon from "../../assets/icons/search_icon.svg?react";

interface Props {
  isSearchOpen: boolean;
  onToggleSearch: () => void;
}

export default function HeaderSearch({ isSearchOpen, onToggleSearch }: Props) {
  return (
    <div
      className={`flex items-center justify-end ${isSearchOpen && "flex-1"}`}
    >
      <div
        className={`overflow-hidden transition-left duration-100 ease-in-out tablet:w-72 tablet:opacity-100 tablet:ml-0 ${
          isSearchOpen ? "w-full ml-4 max-w-70 opacity-100" : "w-0 opacity-0"
        } desktop:w-100`}
      >
        <input
          type="text"
          className="w-full p-3 rounded-lg bg-black-252530 text-sm text-white-f1f1f5 placeholder:text-white-f1f1f5 placeholder:text-sm"
          placeholder="검색..."
        />
      </div>

      <button
        type="button"
        onClick={onToggleSearch}
        className="w-6 h-6 cursor-pointer text-gray-9fa6b2 tablet:hidden"
      >
        {isSearchOpen ? "X" : <SearchIcon />}
      </button>
    </div>
  );
}
