import { Main } from "./navbarelements";
import { H1 } from "../../../lib/ui/text";
const Nav = ({ ComponentTitle }) => {
  return (
    <Main>
      <H1>{ComponentTitle}</H1>
    </Main>
  );
};

export default Nav;
