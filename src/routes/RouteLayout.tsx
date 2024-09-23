import App from "../components/App";
import Projects from "../components/projects/Projects";
import PageLayout from "../components/layout/PageLayout";
import ErrorPage from "../components/ErrorPage";
import Timeline from "../components/projects/Timeline";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfolio",
    element: <PageLayout />,
    children: [
      {
        path: "/portfolio/projects",
        element: <Projects />,
      },
      {
        path: "/portfolio/experience",
        element: <Timeline />,
      },
    ],
  },
];

export default routes;
