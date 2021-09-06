import Trending from "./Trending/index";
import Tweet from "./Tweet/index";
import Navbar from "../../common/Nav/index";
import Searchbar from "../Search/searchbar.jsx";

import {
 Container
} from "./timelinecss";
const Timeline = () => {
    return (
        <>
           
            <Container>
            <Navbar></Navbar>
            <Tweet></Tweet>
            <Trending></Trending>
            <Searchbar></Searchbar>
            </Container>
        </>
    );
}

export default Timeline;
