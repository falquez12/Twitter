import { useEffect, useState } from "react";
import {getTweets, createTweets, deleteTweets } from "./../services/tweetService";

export const useTweets = () => {
    const [tweets, setTweets] = useState([]);

    const listTweets = async () => {
        const tweetList = await getTweets();
        const { data } = tweetList;
        setTweets(data);
    }

    useEffect( ()=>{
        listTweets();
    }, []);

    const addTweet = async (content) => {
        const result = await createTweets(content)
        listTweets();
    };

    const removeTweet = async (id) => {
        const result = await deleteTweets(id)
        listTweets();
    };
    
    return {
        tweets,
        removeTweet,
        addTweet
    }
}