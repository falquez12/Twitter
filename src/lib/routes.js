import Login from "../components/Public/Login";
import SignUp from "./../components/Public/SignUp";
import Home from "./../components/Public/Home";
import Timeline from "./../components/Private/Timeline";
import Trending from "./../components/Private/Timeline/Trending";
<<<<<<< HEAD
import Recover from "./../components/Public/Recover";
=======
import Tweet from "./../components/Private/Timeline/Tweet/index";
import Profile from "../components/Private/Timeline/Profile";
import Notifications from "../components/Private/Timeline/Notifications";
import Bookmarks from "../components/Private/Timeline/Bookmarks";
import Lists from "../components/Private/Timeline/Lists";
import Messages from "../components/Private/Timeline/Messages";
>>>>>>> f3bb3cb4adeb6e77b26f3029f1896ab722b61a0e

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
