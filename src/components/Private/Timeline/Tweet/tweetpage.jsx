import { useEffect } from "react";
import TweetElements from "./tweet";
import { useTweets } from "../../../../hooks/useTweets";
import { useParams } from 'react-router-dom'

const TweetPage = ({ setTitle }) => {
    const { tweets, removeTweet, addTweet, likeTweet, listTweets } = useTweets();
    const { id } = useParams()
    listTweets();
    useEffect(() => {
        setTitle("Tweet");
    });
    const tweet = tweets.filter(t => t._id === id);
    console.log(id)
    console.log("tweetsxd",tweets)
    
    return (
        <>
        <TweetElements
        profilepicture={"https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tL2Q0ZjhiYmNiNjUzYmFhNGQzY2YxNjUxMmI2ZmQzNTViLmpwZWc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D"}
        name={tweet.user.name}
        username={tweet.user.username}
        time={"14s"}
        text={tweet.content}
        id={tweet._id}
        likes={tweet.likes}
        removeTweet={removeTweet}
        likeTweet={likeTweet}
        tweetphoto={"https://i.pinimg.com/originals/bd/6c/0b/bd6c0bef4a473bfca44d1f6c83c95006.png"}
        />
        </>
    );
};

export default TweetPage;