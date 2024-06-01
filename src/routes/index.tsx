import { createBrowserRouter } from "react-router-dom";
import routes from "./RouteLayout";

const router = createBrowserRouter(
  [...routes]
);
export default router;