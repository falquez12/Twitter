import {
 AllTweets
} from "./tweetelements";
import Elements from "./elements";


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
            <AllTweets>
                {elems}
            </AllTweets>
        </>
    );
}

export default Tweet;