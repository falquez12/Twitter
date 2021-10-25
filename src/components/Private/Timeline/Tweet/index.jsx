import { AllTweets } from "./tweetelements";
import TweetElements from "./tweet";
import Metadata from "../../../common/Metadata";
import { useTweets } from "../../../../hooks/useTweets";
import { Link } from "react-router-dom";
import dummies from "./dummies";
import NewTweet from "./../NewTweet";
import { useEffect } from "react";

const Tweet = ({ setTitle }) => {
  const { tweets, removeTweet, addTweet, likeTweet } = useTweets();
  useEffect(() => {
    setTitle("Home");
  });
  const elems = tweets.map((tweet) => {
    return (
      
      
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
    );
  });
  return (
    <>
      <Metadata
        title="Tweets"
        description="Look up this person's twoeets and what is he talking about, be part of the conversation!."
        url="http://localhost:3000/tweets"
        img="img/twitterlogo.png"
      />
      <AllTweets>
        <NewTweet addTweet={addTweet} />
        {elems}
      </AllTweets>
    </>
  );
};

export default Tweet;
