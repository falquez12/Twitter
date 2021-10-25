import { post, get, destroy, put } from "./http";

const getTweets = async () => {
    const json = await get("tweets");
    return json;
}

const createTweets = async (content) => {
    const tweet = {
        content: content
    };
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

const likeTweets = async (like, tweetId) => {
    const tweet = {
        like: like,
        tweetId: tweetId
    };
    const json = await post("tweets/likes", tweet);
    return json;
}

const createComment = async (comment, tweetId) => {
    const tweet = {
        comment: comment,
        tweetId: tweetId
    };
    const json = await post("tweets/comments", tweet);
    return json;
}

const deleteComment = async (commentId, tweetId) => {
    const tweet = {
        tweetId: tweetId,
        commentId: commentId
    };
    const json = await destroy("tweets/comments", tweet);
    return json;
}

const ExternalTweets = async (username) => {
    console.log("hola")
    const json = await get(`tweets/external/${username}`);
    //const json = await get("tweets/external/joebiden");
    return json;
}




export { getTweets, createTweets, deleteTweets, likeTweets, createComment, deleteComment, ExternalTweets }