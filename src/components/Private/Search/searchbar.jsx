import { SearchBar, Searchinput } from "./searchelements";

const Searchbar = () => {
  return (
    <SearchBar>
      <Searchinput
        title="Search"
        type="text"
        name="search"
        placeholder={"Search"}
      />
    </SearchBar>
  );
};

export default Searchbar;
