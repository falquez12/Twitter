import {
 AllTweets,
 HomeH1
} from "./tweetelements";
import Elements from "./elements";
import Metadata from "../../../common/Metadata";

import dummies from "./dummies"

const Tweet = () => {
    const elems = dummies.map((e) => {
        return <Elements 
        profilepicture={e.profilepicture} name={e.name} username = {e.username} 
        time = {e.time} text = {e.text} tweetphoto = {e.tweetphoto}
        ></Elements>
    })
    return (
        <>  
            <Metadata
            title="Tweets"
            description="Look up this person's twoeets and what is he talking about, be part of the conversation!."
            url="http://localhost:3000/tweets"
            img="img/twitterlogo.png"
            />
            <AllTweets>
                <HomeH1>Home</HomeH1>
                {elems}
            </AllTweets>
        </>
    );
}

export default Tweet;