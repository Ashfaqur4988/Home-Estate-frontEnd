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
        { path: "/list", element: <ListPage /> },
        { path: "/:id", element: <SinglePage /> },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        { path: "/profile", element: <ProfilePage /> },
        { path: "/profile/update", element: <ProfileUpdatePage /> },
        { path: "/add", element: <NewPostPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
