import {
    Search_bar, Searchtext, SearchP
} from "./searchelements";
import { AiOutlineSearch } from 'react-icons/ai';

const Searchbar = () => {
    return (
        <Search_bar>
            <SearchP><AiOutlineSearch></AiOutlineSearch></SearchP><Searchtext>Search</Searchtext>
        </Search_bar>
    );
}

export default Searchbar;