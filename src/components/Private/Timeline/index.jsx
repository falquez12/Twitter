import Trending from "./Trending/index";
import Tweet from "./Tweet/index";
import Navbar from "../../common/Nav/index";

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
            </Container>
        </>
    );
}

export default Timeline;
