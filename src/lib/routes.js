import Login from "../components/Public/Login";
import SignUp from "./../components/Public/SignUp";
import Home from "./../components/Public/Home";
import Timeline from "./../components/Private/Timeline";
import Recover from "./../components/Public/Recover";

import Search from "../components/Private/Search";
const routes = {
  restricted: [
    {
      title: "Home",
      path: "/home",
      component: Timeline,
    },
    {
      title: "Trending",
      path: "/trending",
      component: Search,
    },
    {
      title: "Notifications",
      path: "/notifications",
      component: Search,
    },
    {
      title: "Messages",
      path: "/Messages",
      component: Search,
    },
    {
      title: "Bookmarks",
      path: "/bookmarks",
      component: Search,
    },
    {
      title: "Lists",
      path: "/lists",
      component: Search,
    },
    {
      title: "Profile",
      path: "/profile",
      component: Search,
    },
    {
      title: "Tweet",
      path: "/Tweet",
      component: Search,
    },
    {
      title: "Tweet",
      path: "/tweet/:id",
      component: Search,
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
