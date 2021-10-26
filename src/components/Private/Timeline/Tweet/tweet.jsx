import {
  TweetContainer,
  TweetName,
  TweetText,
  TweetIcons,
  Container,
  ProfilePicture,
} from "./tweetelements";
import { GoVerified } from "react-icons/go";
import SelectIcon from "../../../../lib/ui/icons/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useContext} from "react";
import { AuthContext } from "../../../../context/AuthContext";

const TweetElement = (props) => {
  const { user } = useContext(AuthContext);
  console.log("user1",user)
  const {
    profilepicture,
    name,
    username,
    userId,
    time,
    text,
    id,
    likes,
    tweetphoto,
    removeTweet,
    likeTweet,
  } = props;


  const isTweetUser = () =>{ 
    return JSON.parse(user).username === username
  };

  console.log("isTweetUser", isTweetUser())
  console.log("user.username", user?.username)
  console.log("user parse",JSON.parse(user))
  console.log("username", username)
  return (
    <>
      <Container>
        <ProfilePicture
          src={profilepicture}
          alt="profilepicture"
          height="40"
          width="40"
        />
        <TweetContainer>
          <Link
            to={{
              pathname: `/tweet/${id}`,
            }}
            style={{ textDecoration: 'none',color: 'black'}}
          >
            <TweetName>
              <p style={{ fontWeight: "600" }}>{name}</p>
              <p>
                <GoVerified />
              </p>
              <p>{username}</p>
              <p>.</p>
              <p>{time}</p>
            </TweetName>

            <TweetText>{text}</TweetText>

            <LazyLoadImage
              src={tweetphoto}
              alt="tweetimage"
              width="100%"
              height="300vh"
              style={{
                borderRadius: "12px",
                maxWidth: "574px",
                display: "block",
                objectFit: "cover",
              }}
            />
          </Link>
          <TweetIcons>
            <SelectIcon name={"MessageRounded"} />
            <SelectIcon name={"Retweet"} />
            <div onClick={() => likeTweet(1, id)}>
              <SelectIcon name={"Heart"} />
              {likes}
            </div>
            {isTweetUser() ? (
                <div onClick={() => removeTweet(id)}>
                <SelectIcon name={"Delete"} />
              </div>
              ) : (
                <></>
              )}
          </TweetIcons>
        </TweetContainer>
      </Container>
    </>
  );
};

export default TweetElement;
