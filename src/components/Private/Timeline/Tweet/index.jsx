import { AllTweets } from "./tweetelements";
import Elements from "./tweet";
import Metadata from "../../../common/Metadata";

import dummies from "./dummies";
import { useEffect } from "react";

const Tweet = ({ setTitle }) => {
  useEffect(() => {
    setTitle("Home");
  });

  const elems = dummies.map((e) => {
    return (
      <Elements
        profilepicture={e.profilepicture}
        name={e.name}
        username={e.username}
        time={e.time}
        text={e.text}
        tweetphoto={e.tweetphoto}
      ></Elements>
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
      <AllTweets>{elems}</AllTweets>
    </>
  );
};

export default Tweet;
