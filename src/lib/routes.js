import Login from "../components/Public/Login";
import SignUp from "./../components/Public/SignUp";
import Home from "./../components/Public/Home";
import Timeline from "./../components/Private/Timeline";
import Trending from "./../components/Private/Timeline/Trending";

const routes = {
  restricted: [
    {
      title: "Home",
      path: "/home",
      component: Timeline,
    },
    {
      title: "Trending",
      path: "/Trending",
      component: Trending,
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
