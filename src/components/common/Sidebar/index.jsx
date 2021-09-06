import { Link } from "react-router-dom";
import routes from "../../../lib/routes";
import { NavContainer, DivElement, PHome, Divlogo } from "./navelements";
import Button from "../../common/Button";
import SelectIcon from "../../../lib/ui/icons/icons";
import Addtweet from "../../../lib/ui/vectors/addtweet";
import React, { useState, useEffect } from "react";

const Nav = () => {
  const [isMobile, setMobile] = useState(window.innerWidth > 960);

  const updateMedia = () => {
    setMobile(window.innerWidth > 960);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const { restricted } = routes;
  const result = restricted.filter((word) =>
    [
      "Home",
      "Trending",
      "Notifications",
      "Messages",
      "Bookmarks",
      "Lists",
      "Profile",
    ].includes(word.title)
  );
  return (
    <NavContainer>
      {result.map(({ path, title }) => (
        <Link to={path}>
          <DivElement>
            <SelectIcon name={title} />
            <PHome>{title}</PHome>
          </DivElement>
        </Link>
      ))}
      <Divlogo>
        {isMobile ? (
          <Button text="Tweet" primary fluid round></Button>
        ) : (
          <Button text={<Addtweet />} primary fluid round></Button>
        )}
      </Divlogo>
    </NavContainer>
  );
};

export default Nav;
