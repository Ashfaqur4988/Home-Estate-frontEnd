import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import ListPage from "./pages/listPage/ListPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Login from "./pages/login/Login";
import HomePage from "./pages/homePage/HomePage";
import SinglePage from "./pages/singlePage/SinglePage";
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
        { path: "/profile", element: <ProfilePage /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
