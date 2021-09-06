import Nav from "../../common/Nav";
import Profile from "./Profile";
import Trending from "./Trending";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Overlap, H1T} from "./timelineelements";

const Timeline = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Container>
        <H1T>Home</H1T>
        </Container>
        
      </BrowserRouter>
    </>
  );
};

export default Timeline;
