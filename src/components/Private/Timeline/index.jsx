import Trending from "./Trending/index";
import Tweet from "./Tweet/index";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Lists from "./Lists";
import Messages from "./Messages";
import Bookmarks from "./Bookmarks";
import Navbar from "../../common/Nav/index";
import { ColNav } from "./timelineelements";
import { Row, Col, Container } from "react-bootstrap";
import Searchbar from "../Search/searchbar.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "../../../lib/routes";
const Timeline = () => {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <ColNav xs={3}>
            <div className="position-fixed">
              <Navbar></Navbar>
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
