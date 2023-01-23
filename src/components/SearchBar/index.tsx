import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchStr, setSearchStr] = useState('');


  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(event.target.value);
    handleSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  const handleSearch = (searchStr: React.SetStateAction<string>) => {
    setSearchValue(searchStr);
  }


  // 👇️ type event as React.KeyboardEvent<HTMLElement>
  const onKeyDownSearch = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'enter') {
      handleSearch(searchStr);
    }
  };


  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={onChangeSearch}
          onKeyDown={onKeyDownSearch}
        />
      </div>
    </form>
  );
};

export default SearchBar;