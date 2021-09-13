import Metadata from "../../../common/Metadata";
import { useEffect } from "react";
import {
  StyledCol,
  Horizontal,
  IconDiv,
  SpacedHorizontal,
  H2Profile,
  PProfile,
} from "./profileelements";
import { BsCalendarFill } from "react-icons/bs";
import Button from "../../../common/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Profile = ({ setTitle }) => {
  useEffect(() => {
    setTitle("Profile");
  });
  return (
    <>
      <Metadata
        title="Profile"
        description="Cuztomize your profile and settings for your Twoitter account."
        url="https://twitterclone-b609d.web.app/profile"
        img="img/twitterlogo.png"
      />
      <StyledCol>
        <LazyLoadImage
          src="https://i.pinimg.com/originals/bd/6c/0b/bd6c0bef4a473bfca44d1f6c83c95006.png"
          alt="tweetimage"
          width="100%"
          height="300vh"
          style={{
            width: "100%",
            display: "block",
            objectFit: "cover",
            height: "25vh",
          }}
        />
        <SpacedHorizontal>
          <H2Profile>jesus</H2Profile>
          <Button text="Follow" secondary fluid></Button>
        </SpacedHorizontal>
        <PProfile>@jesus</PProfile>
        <Horizontal>
          <IconDiv>
            <BsCalendarFill />
          </IconDiv>
          <p>Joined in November 2013</p>
        </Horizontal>
        <Horizontal>
          <p>
            {" "}
            <b>300</b> Siguiendo <b>17</b> Seguidores
          </p>
        </Horizontal>
      </StyledCol>
    </>
  );
};

export default Profile;
