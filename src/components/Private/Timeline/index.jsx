import Trending from "./Trending/index";
import Tweet from "./Tweet/index";
import Sidebar from "../../common/Sidebar/index";
import { ColNav, Divmain, Divside } from "./timelineelements";
import { Row, Col } from "react-bootstrap";
import Searchbar from "../Search/searchbar.jsx";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Lists from "./Lists";
import Messages from "./Messages";
import Bookmarks from "./Bookmarks";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Metadata from "../../common/Metadata";
import Navbar from "../../common/Navbar/index";
import { useState } from "react";
const Timeline = () => {
  const [title, setTitle] = useState("");
  return (
    <BrowserRouter>
      <Metadata
        title="Home"
        description="This is what is happening today in your feed. Find out the latest news, gossip and conversations people around the world are experiencing right now."
        url="http://localhost:3000/home"
        img="img/twitterlogo.png"
      />
      <Divmain>
        <ColNav>
          <div className="position-fixed">
            <Sidebar></Sidebar>
          </div>
        </ColNav>
        <div style={{ widht: "990px", display: "flex" }}>
          <div>
            <div
              style={{
                position: "relative",
                height: "3rem",
              }}
            >
              <Navbar ComponentTitle={title}></Navbar>
            </div>
            <Switch>
              <Route path="/home">
                <Tweet setTitle={setTitle}></Tweet>
              </Route>
              <Route path="/profile">
                <Profile setTitle={setTitle}></Profile>
              </Route>
              <Route path="/lists">
                <Lists setTitle={setTitle}></Lists>
              </Route>
              <Route path="/bookmarks">
                <Bookmarks setTitle={setTitle}></Bookmarks>
              </Route>
              <Route path="/messages">
                <Messages setTitle={setTitle}></Messages>
              </Route>
              <Route path="/notifications">
                <Notifications setTitle={setTitle}></Notifications>
              </Route>
            </Switch>
          </div>
          <Divside>
            <Searchbar />
            <Trending></Trending>
          </Divside>
        </div>
      </Divmain>
    </BrowserRouter>
  );
};

export default Timeline;
