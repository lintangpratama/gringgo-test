import { createBrowserRouter } from "react-router-dom";
import Index from "../pages";
import AddProvince from "../pages/addProvince";
import EditProvince from "../pages/editProvince";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/add-province",
    element: <AddProvince />,
  },
  {
    path: "/edit-province/:id",
    element: <EditProvince />,
  },
]);

export default router;
