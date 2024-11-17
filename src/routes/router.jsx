import {createBrowserRouter,} from "react-router-dom";
import Login from "../components/Login/Login";
import News from "../components/page/News/News";
import HomeLayout from "../components/layouts/HomeLayout/HomeLayout";
import Destination from "../components/page/Destination/Destination";
import Blog from "../components/page/Blog/Blog";
import Contact from "../components/page/Contact/Contact";
import Register from "../components/Register/Register";


const router = createBrowserRouter([
 {
   path: "/",
   element: <HomeLayout></HomeLayout>,
   children: [
    {
      path: "/news",
      element: <News></News>
    },
    {
      path: "/destination",
      element: <Destination></Destination>
    },
    {
      path: "/blog",
      element: <Blog></Blog>
    },
    {
      path: "/contact",
      element: <Contact></Contact>
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/register",
      element: <Register></Register>
    }
   ]
 },
]);


export default router;