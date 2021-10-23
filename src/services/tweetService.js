import { post, get, destroy } from "./http";

const getTweets = async () => {
    const json = await get("tweets");
    return json;
}

const createTweets = async (content) => {
    const tweet = {
        content: content
    };
    console.log("createtweets")
    const json = await post("tweets", tweet);
    return json;
}

const deleteTweets = async (id) => {
    const tweet = {
        tweetId: id
    };
    const json = await destroy("tweets", tweet);
    return json;
}



export { getTweets, createTweets }