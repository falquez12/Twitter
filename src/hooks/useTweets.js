import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import {getTweets, createTweets, deleteTweets, likeTweets } from "./../services/tweetService";

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
        const result = await createTweets(content);
        if(result){
            Swal.fire({
                title: 'Success!',
                text: 'Tweet created successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong!',
                icon: 'error',
            })
        }
        listTweets();
    };

    const removeTweet = async (id) => {
        const result = await deleteTweets(id)
        if(result){
            Swal.fire({
                title: 'Success!',
                text: 'Tweet deleted',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong!',
                icon: 'error',
            })
        }
        listTweets();
    };

    const likeTweet = async (like, tweetId) => {
        const result = await likeTweets(like,tweetId)
        listTweets();
    };
    
    return {
        tweets,
        removeTweet,
        addTweet,
        likeTweet
    }
}