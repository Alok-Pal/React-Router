import {
  // Route,
  createBrowserRouter,
  // createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import User from "../components/User/User";
import Github, { userDataLoader } from "../components/Github/Github";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "github",
        element: <Github />,
        loader: userDataLoader,
      },
      {
        path: "user/:userId",
        element: <User />,
      },
    ],
  },
]);

// Another Way to create Router

// export const Router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//     </Route>
//   )
// );
