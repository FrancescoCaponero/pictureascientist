import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home.tsx"
import PictureAScientist from "./pages/PictureAScientist.tsx"
import About from "./pages/About.tsx"
import NotFound from "./pages/404.tsx";

import WebsiteLayout from "./layouts/SiteLayout.tsx";

import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: 
  <WebsiteLayout>
    <Home />
  </WebsiteLayout>
  },
  {
    path: "/about",
    element: 
    <WebsiteLayout>
    <About />
  </WebsiteLayout>
  },
  {
    path: "/picture-a-scientist",
    element: <WebsiteLayout>
    <PictureAScientist />
  </WebsiteLayout>
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

try {
  createRoot(document.getElementById("root")!).render(
      <RouterProvider router={router} />
  );
} catch (error) {
  console.error("Errore di rendering:", error);
}
