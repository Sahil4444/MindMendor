import UI from "./components/UI/UI";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import About from "./components/About";
import Contact from "./components/Contact";
import Logincontainers from "./components/Logincontainers";

function App() {
  const router = createBrowserRouter([
    {
      path: "/MindMendor",
      element: <Home />,
    },
    {
      path: "/MindMendor/ui",
      element: <UI />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
