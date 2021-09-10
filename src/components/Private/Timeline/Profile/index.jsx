import Metadata from "../../../common/Metadata";
import { useEffect } from "react";
import {
  StyledCol,
  Horizontal,
  IconDiv,
  SpacedHorizontal,
  H2Profile,
  PProfile,
  StyledImg,
} from "./profileelements";
import { BsCalendarFill } from "react-icons/bs";
import Button from "../../../common/Button";

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
        <StyledImg
          src="https://pbs.twimg.com/media/D_DYp_qUEAEDAyc.jpg"
          alt="tweetimage"
          width="100%"
          height="185px"
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
