import TrendingCard from "./trendingcard";
import { TrendingContainer, TrendingTitle, Showmore } from "./trendingelements";
import Metadata from "../../../common/Metadata";
import { useState, useEffect } from "react";

const Trending = () => {
  const externalUsername = "francis_ngannou";
  const [externalTweets, setExternalTweets] = useState([null]);

  useEffect(() => {
    try {
      fetch(
        `https://api-twitter-frontend.herokuapp.com/api/tweets/external/${externalUsername}`,
        {
          method: "GET",
          headers: new Headers({
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTc0NTMxNjIxOGFhMDAwMTYyNWZjNGEiLCJpYXQiOjE2MzUwMjU2NDd9.6kqoc6Akk2NJdWJYWg-T82fe-B8SlCuPXsZI1QwZweE",
          }),
        }
      )
        .then((res) => res.json())
        .then((response) => {
          setExternalTweets(response);
        })
        .catch((error) => console.log(error));
    } catch (error) {}
  }, []);

  return (
    <>
      <Metadata
        title="Trending"
        description="Find out about what's being twitted right now in your country and worldwide."
        url="http://localhost:3000/trending"
        img="img/twitterlogo.png"
      />
      <TrendingContainer>
        <TrendingTitle>{externalUsername}</TrendingTitle>
        {externalTweets.map((t, index) => {
          if (index < 5) {
            return (
              <TrendingCard
                trending={index + 1 + ".Trending"}
                hashtag={"#" + externalUsername}
                content={t?.text}
                ntweets={19 + "k Tweets"}
              ></TrendingCard>
            );
          }
        })}
        <Showmore>Show more</Showmore>
      </TrendingContainer>
    </>
  );
};

export default Trending;
