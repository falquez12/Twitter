import SelectIcon from "../../../lib/ui/icons/icons";
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
