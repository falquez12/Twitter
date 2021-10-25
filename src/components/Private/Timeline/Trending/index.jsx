import TrendingCard from "./trendingcard";
import { TrendingContainer, TrendingTitle, Showmore } from "./trendingelements";
import Metadata from "../../../common/Metadata";
import { useTweets } from "../../../../hooks/useTweets";
import dummies from "./dummies";
import { useState, useEffect } from "react";

const Trending = () => {
  // { tweets, getExternalTweets } = useTweets();

  const externalUsername = "joebiden";
  const [externalTweets, setExternalTweets] = useState({});

  useEffect(() => {
  //  try {
  //    fetch(
  //      "https://api-twitter-frontend.herokuapp.com/api/tweets/external/joebiden",
  //      {
  //        method: "GET",
  //        headers: new Headers({
  //          "x-access-token":
  //            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTc0NTMxNjIxOGFhMDAwMTYyNWZjNGEiLCJpYXQiOjE2MzUwMjU2NDd9.6kqoc6Akk2NJdWJYWg-T82fe-B8SlCuPXsZI1QwZweE",
  //        }),
  //      }
  //    )
  //      .then((res) => res.json())
  //      .then((response) => {
  //        setExternalTweets(response.items);
  //      })
  //      .catch((error) => console.log(error));
  //  } catch (error) {
  //    console.log("ERRORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR,error".error);
  //  }
  }, []);

  //console.log("test", externalTweets);
  const elem = dummies.map((e, index) => {
    return (
      <TrendingCard
        trending={index + 1 + ". Trending"}
        hashtag={e.hashtag}
        ntweets={"500k Tweets"}
      ></TrendingCard>
    );
  });
  return (
    <>
      <Metadata
        title="Trending"
        description="Find out about what's being twoitted right now in your country and worldwide."
        url="http://localhost:3000/trending"
        img="img/twitterlogo.png"
      />
      <TrendingContainer>
        <TrendingTitle>{externalUsername}</TrendingTitle>
        {elem}
        <Showmore>Show more</Showmore>
      </TrendingContainer>
    </>
  );
};

export default Trending;
