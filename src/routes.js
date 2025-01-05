import { lazy } from "react";

export const routes = [
  {
    path: "/",
    Component: lazy(() => import("./App")),
    children: [
      {
        index: true,
        Component: lazy(() => import("./pages/main/HomePage")),
      },
      {
        path: "/contact-us",
        Component: lazy(() => import("./pages/contact-us/ContactUs")),
      },
      {
        path: "/search",
        Component: lazy(() => import("./pages/search-page/SearchPage")),
      },
      {
        path: "/search/:id",
        Component: lazy(() => import("./component/EstateDetails")),
      },
    ],
  },
];
