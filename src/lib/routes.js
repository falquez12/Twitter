import Login from "../components/Public/Login";
import SignUp from "./../components/Public/SignUp";
import Home from "./../components/Public/Home";
import Timeline from "./../components/Private/Timeline";
import Profile from "../components/Private/Timeline/Profile";
import Trending from "../components/Private/Timeline/Trending";
import Tweet from "../components/Private/Timeline/Tweet";
import Notifications from "../components/Private/Timeline/Notifications";
import Bookmarks from "../components/Private/Timeline/Bookmarks";
import Lists from "../components/Private/Timeline/Lists";
import Messages from "../components/Private/Timeline/Messages";
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
  ],
};
export default routes;
