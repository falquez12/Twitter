import { Search_bar, Searchtext, Searchinput } from "./searchelements";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  return (
    <Search_bar>
      <Searchinput
        title="Search"
        type="text"
        name="search"
        placeholder="Search"
      />
    </Search_bar>
  );
};

export default Searchbar;
