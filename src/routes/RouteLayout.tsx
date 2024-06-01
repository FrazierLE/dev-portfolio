import App from "../components/App";
import Projects from "../components/projects/Projects";

const routes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/projects",
    element: <Projects />
  }
]

export default routes