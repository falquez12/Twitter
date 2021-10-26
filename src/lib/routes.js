import Login from "../components/Public/Login";
import SignUp from "./../components/Public/SignUp";
import Home from "./../components/Public/Home";
import Timeline from "./../components/Private/Timeline";
import Recover from "./../components/Public/Recover";
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
      component: Timeline,
    },
    {
      title: "Notifications",
      path: "/notifications",
      component: Timeline,
    },
    {
      title: "Messages",
      path: "/Messages",
      component: Timeline,
    },
    {
      title: "Bookmarks",
      path: "/bookmarks",
      component: Timeline,
    },
    {
      title: "Lists",
      path: "/lists",
      component: Timeline,
    },
    {
      title: "Profile",
      path: "/profile",
      component: Timeline,
    },
    {
      title: "Tweet",
      path: "/Tweet",
      component: Timeline,
    },
    {
      title: "Tweet",
      path: "/tweet/:id",
      component: Timeline,
    },
    {
      title: "Search",
      path: "/search",
      component: Timeline,
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
