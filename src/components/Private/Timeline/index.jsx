import Trending from "./Trending/index";
import Tweet from "./Tweet/index";

import {
 Container
} from "./timelinecss";
const Timeline = () => {
    return (
        <>
            <Container>
            <Tweet></Tweet>
            <Trending></Trending>
            </Container>
        </>
    );
}

export default Timeline;