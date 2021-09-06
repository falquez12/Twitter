import Elements from "./elements";
import {
 TrendingContainer,
 TrendingTitle,
 Showmore
} from "./trendingelements";

import dummies from "./dummies"
const Trending = () => {
    const elem = dummies.map((e,index) => {
                    return <Elements trending={(index+1)+".Trending"} hashtag={"#"+e.hashtag} ntweets = {e.ntweets+"k Tweets"} ></Elements>
    })
    return (
        <>
            <TrendingContainer>
            <TrendingTitle>Paris Trend</TrendingTitle>
            {elem}
            <Showmore>Show more</Showmore>
            </TrendingContainer>
        </>
    );
}

export default Trending;