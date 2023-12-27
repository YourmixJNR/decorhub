import React from "react";
import { ReactComponent as SearchTwo } from "../../assets/icons/search-02.svg";

const SearchBar = () => {
  return (
    <div className="flex relative items-center">
      <SearchTwo className="absolute ml-2.5 left-0" />
      <input
        type="text"
        placeholder="Search"
        className="h-11 w-full rounded-md border border-slate-500 pl-10 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
