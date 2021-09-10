import routes from "../../../lib/routes";
import {
  NavContainer,
  DivElement,
  PHome,
  Divlogo,
  SidebarElements,
} from "./sidebarelements";
import Button from "../../common/Button";
import SelectIcon from "../../../lib/ui/icons/icons";
import Addtweet from "../../../lib/ui/vectors/addtweet";
import React, { useState, useEffect } from "react";
import Vectorblue from "../../../lib/ui/vectors/vector_blue";

const Side = () => {
  const [isMobile, setMobile] = useState(window.innerWidth > 1200);

  const updateMedia = () => {
    setMobile(window.innerWidth > 1200);
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
    <NavContainer style={{ overflowY: "auto", height: "calc(100vh )" }}>
      <Divlogo>
        <SelectIcon name={"Twitter"} />
      </Divlogo>
      {result.map(({ path, title }) => (
        <SidebarElements to={path}>
          <DivElement>
            <SelectIcon name={title} />
            <PHome>{title}</PHome>
          </DivElement>
        </SidebarElements>
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

export default Side;
