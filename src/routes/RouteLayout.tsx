import App from "../components/App";
import Projects from "../components/projects/Projects";
import PageLayout from "../components/layout/PageLayout";
import Experience from "../components/projects/Experience";

const routes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/home",
    element: <PageLayout />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/experience",
    element: <Experience />
  }
]

export default routes