import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import {getTweets, createTweets, deleteTweets, likeTweets, createComment, deleteComment, ExternalTweets } from "./../services/tweetService";

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

    const addComment = async (comment, tweetId) => {
        const result = await createComment(comment, tweetId);
        listTweets();
    };

    const removeComment = async (tweetId, commentId) => {
        const result = await deleteComment(tweetId, commentId)
        listTweets();
    };

    const getExternalTweets = async (username) => {
        const result = await ExternalTweets(username)
        //listTweets();
        return result
    };
    
    return {
        tweets,
        removeTweet,
        addTweet,
        likeTweet,
        addComment,
        removeComment,
        getExternalTweets,
        listTweets
    }
}