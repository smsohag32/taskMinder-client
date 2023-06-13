import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AllTask from "../pages/AllTask/AllTask";
import AddTask from "../pages/AddTask/AddTask";

// create route
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <AllTask />,
      },
      {
        path: "/add-task",
        element: <AddTask />,
      },
    ],
  },
]);

export default router;
