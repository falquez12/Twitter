import Login from "../components/Public/Login";
import SignUp from "./../components/Public/SignUp";
import Home from "./../components/Public/Home";
import Timeline from "./../components/Private/Timeline";
import Trending from "./../components/Private/Timeline/Trending";
import Recover from "./../components/Public/Recover";
import Tweet from "./../components/Private/Timeline/Tweet/index";
import Profile from "../components/Private/Timeline/Profile";
import Notifications from "../components/Private/Timeline/Notifications";
import Bookmarks from "../components/Private/Timeline/Bookmarks";
import Lists from "../components/Private/Timeline/Lists";
import Messages from "../components/Private/Timeline/Messages";
import Search from "../components/Private/Search";
const routes = {
  restricted: [
    {
      title: "Home",
      path: "/home",
      component: Timeline,
    },
    {
      title: "Profile",
      path: "/profile",
      component: Profile,
    },
    {
      title: "Trending",
      path: "/trending",
      component: Trending,
    },
    {
      title: "Notifications",
      path: "/notifications",
      component: Notifications,
    },
    {
      title: "Bookmarks",
      path: "/bookmarks",
      component: Bookmarks,
    },
    {
      title: "Lists",
      path: "/lists",
      component: Lists,
    },
    {
      title: "Messages",
      path: "/Messages",
      component: Messages,
    },
     {
      title: "Tweet",
      path: "/Tweet",
      component: Tweet,
    },
    {
      title: "Search",
      path: "/search",
      component: Search,
    },
  ],
  unrestricted: [
    {
      title: "Home",
      path: "/",
      component: Home,
    },
    {
      title: "Login",
      path: "/login",
      component: Login,
    },
    {
      title: "Sign Up",
      path: "/signup",
      component: SignUp,
    },
    {
      title: "Recover",
      path: "/recover",
      component: Recover,
    },
  ],
};
export default routes;
