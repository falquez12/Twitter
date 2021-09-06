import { Link } from "react-router-dom";
import routes from "../../../lib/routes";
import { NavContainer, DivElement, PHome, Divlogo } from "./navelements";
import Button from "../../common/Button";
import SelectIcon from "../../../lib/ui/icons/icons";

const Nav = () => {
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
      <Divlogo>
        <SelectIcon name="Twitter" />
      </Divlogo>
      {result.map(({ path, title }) => (
        <Link to={path}>
          <DivElement>
            <SelectIcon name={title} />
            <PHome>{title}</PHome>
          </DivElement>
        </Link>
      ))}
      <Divlogo>
        <Button text="Tweet" primary fluid round></Button>
      </Divlogo>
    </NavContainer>
  );
};

export default Nav;
