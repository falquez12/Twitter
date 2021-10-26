import { AllTweets } from "../Tweet/tweetelements";
import TweetElements from "../Tweet/tweet.jsx";
import Metadata from "../../../common/Metadata";
import { useTweets } from "../../../../hooks/useTweets";
import { useState, useEffect } from "react";

const TrendingPage = ({ setTitle }) => {
    const { tweets, removeTweet, getTrendingTweets, likeTweet } = useTweets();
    //const [trendingTweets, setTrendingTweets] = useState([null]);
    useEffect(() => {
      setTitle("Trending");
    });
    
    //console.log("trendingTweets",trendingTweets)
    const elems = tweets.map((tweet) => {
      return (
        <TweetElements
          key= {tweet._id}
          profilepicture={"https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tL2Q0ZjhiYmNiNjUzYmFhNGQzY2YxNjUxMmI2ZmQzNTViLmpwZWc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D"}
          name={tweet.user.name}
          username={tweet.user.username}
          userId={tweet.user._id}
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
          {elems}
        </AllTweets>
      </>
    );
  };
  
  export default TrendingPage;
  