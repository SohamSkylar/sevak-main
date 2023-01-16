import React from "react";
import './navbar.css'

const SearchBar = ({propQuery}) => {

  // console.log(Users.filter((user)=>user.name.toLowerCase().includes("ma")));

  return (
      <form onSubmit={(e) => e.preventDefault()} className="my-auto">
        <input className="p-2 h-7 my-auto w-80 searchBar border-2"
          placeholder="Search"
          type="text"
          name="text"
          // value={text}
          onChange={e => propQuery(e.target.value)}
        />
      </form>
  );
};

export default SearchBar;
