import React from 'react';
import './SearchBar.scss';

function SearchBar({ onSearch }) {
  const search = (e) => {
    e.preventDefault();
    onSearch && onSearch(e);
  };

  return (
    <form className="search-bar" onSubmit={search}>
      <input type="text"/>
      <div className="border"></div>
      <button>
        <img
          src={`${process.env.PUBLIC_URL}/icons/24x24/outline-search.png`}
          alt="Search"
          type="submit"
          title="Поиск"
        />
      </button>
    </form>
  );
}

export default SearchBar;