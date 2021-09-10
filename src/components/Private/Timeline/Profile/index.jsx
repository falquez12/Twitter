import Metadata from "../../../common/Metadata";
import { useEffect } from "react";

const Profile = ({ setTitle }) => {
  useEffect(() => {
    setTitle("Profile");
  });
  return (
    <>
      <Metadata
        title="Profile"
        description="Cuztomize your profile and settings for your Twoitter account."
        url="http://localhost:3000/profile"
        img="img/twitterlogo.png"
      />
      <h2>Profile</h2>
      <p>hola mundo </p>
    </>
  );
};

export default Profile;
