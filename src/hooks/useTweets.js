import { useEffect, useState } from "react";
import {getTweets, createTweets } from "./../services/tweetService";

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
        console.log("addtweets")
        const result = await createTweets(content)
        listTweets();
    };

    const removeTweet = (id) => {
        
    };
    
    return {
        tweets,
        removeTweet,
        addTweet
    }
}