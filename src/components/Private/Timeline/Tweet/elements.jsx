import {
  TweetContainer,
  TweetName,
  TweetText,
  TweetImage,
  TweetIcons,
  Container,
  ProfilePicture,
} from "./tweetelements";
import { GoVerified } from "react-icons/go";
import SelectIcon from "../../../../lib/ui/icons/icons";

// import tweet1 from "../../../../imgs/tweet1.jpg"
// import profilepicture1 from "../../../../imgs/profilepicture1.jpg"

const TweetElement = (props) => {
  const { profilepicture, name, username, time, text, tweetphoto } = props;

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
          <TweetName>
            <p>{name}</p>
            <p>
              <GoVerified />
            </p>
            <p>{username}</p>
            <p>.</p>
            <p>{time}</p>
          </TweetName>

          <TweetText>{text}</TweetText>

          <img
            src={tweetphoto}
            alt="image"
            width= "100%"
            height="285px"
            style={{ borderRadius: "12px",maxWidth:"574px",display:"block",objectFit:"cover" }}
          />

          <TweetIcons>
            <SelectIcon name={"MessageRounded"} />
            <SelectIcon name={"Retweet"} />
            <SelectIcon name={"Heart"} />
            <SelectIcon name={"Inbox"} />
          </TweetIcons>
        </TweetContainer>
      </Container>
    </>
  );
};

export default TweetElement;
