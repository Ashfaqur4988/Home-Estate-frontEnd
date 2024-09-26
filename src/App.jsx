import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage, RequireAuth } from "./pages/LandingPage/LandingPage";
import ListPage from "./pages/listPage/ListPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Login from "./pages/login/Login";
import HomePage from "./pages/homePage/HomePage";
import SinglePage from "./pages/singlePage/SinglePage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import ProfileUpdatePage from "./pages/profileUpdatePage/ProfileUpdatePage";
import NewPostPage from "./pages/newPostPage/NewPostPage";
import { listPageLoader, loaders, profilePageLoader } from "./lib/loaders";
import ErrorPage from "./pages/errorPage/ErrorPage";
import ContactUs from "./pages/contactUs/ContactUs";
import About from "./pages/about/About";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        { path: "/list", element: <ListPage />, loader: listPageLoader },
        { path: "/:id", element: <SinglePage />, loader: loaders },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        { path: "/profile/update", element: <ProfileUpdatePage /> },
        { path: "/add", element: <NewPostPage /> },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
