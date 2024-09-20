import App from "../components/App";
import Projects from "../components/projects/Projects";
import PageLayout from "../components/layout/PageLayout";
import Experience from "../components/projects/Experience";
import ErrorPage from "../components/ErrorPage";

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
            element: <Projects />
          },
          {
            path: "/portfolio/experience",
            element: <Experience />
          },
        ]
      },
    ]

export default routes