import Elements from "./elements";
import {
 TrendingContainer,
 TrendingTitle,
 Showmore
} from "./trendingelements";
import Metadata from "../../../common/Metadata";

import dummies from "./dummies"
const Trending = () => {
    const elem = dummies.map((e,index) => {
        return <Elements trending={(index+1)+".Trending"} hashtag={"#"+e.hashtag} ntweets = {e.ntweets+"k Tweets"} ></Elements>
    })
    return (
        <>  
            <Metadata
            title="Trending"
            description="Find out about what's being twoitted right now in your country and worldwide."
            url="http://localhost:3000/trending"
            img="img/twitterlogo.png"
            />
            <TrendingContainer>
            <TrendingTitle>Paris Trend</TrendingTitle>
            {elem}
            <Showmore>Show more</Showmore>
            </TrendingContainer>
        </>
    );
}

export default Trending;