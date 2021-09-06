import Trending from "./Trending/index";
import Tweet from "./Tweet/index";
import Sidebar from "../../common/Sidebar/index";
import { ColNav } from "./timelineelements";
import { Row, Col, Container } from "react-bootstrap";
import Searchbar from "../Search/searchbar.jsx";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Lists from "./Lists";
import Messages from "./Messages";
import Bookmarks from "./Bookmarks";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Metadata from "../../common/Metadata";


const Timeline = () => {
  return (
    <BrowserRouter>
      <Metadata
        title="Home"
        description="This is what is happening today in your feed. Find out the latest news, gossip and conversations people around the world are experiencing right now."
        url="http://localhost:3000/home"
        img="img/twitterlogo.png"
      />
      <Container>
        <Row>
          <ColNav xs={3}>
            <div className="position-fixed">
              <Sidebar></Sidebar>
            </div>
          </ColNav>
          <Col xs={6}>
            <Switch>
              <Route path="/home">
                <Tweet></Tweet>
              </Route>
              <Route path="/profile">
                <Profile></Profile>
              </Route>
              <Route path="/lists">
                <Lists></Lists>
              </Route>
              <Route path="/bookmarks">
                <Bookmarks></Bookmarks>
              </Route>
              <Route path="/messages">
                <Messages></Messages>
              </Route>
              <Route path="/notifications">
                <Notifications></Notifications>
              </Route>
            </Switch>
          </Col>
          <Col xs={3}>
            <Searchbar />
            <Trending></Trending>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default Timeline;
