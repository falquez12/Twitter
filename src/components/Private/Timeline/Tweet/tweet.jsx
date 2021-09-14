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
