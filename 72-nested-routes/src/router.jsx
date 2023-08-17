import { Outlet, createBrowserRouter } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Team } from "./pages/Team";
import { TeamMember } from "./pages/TeamMember";
import { TeamNav } from "./TeamNav";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    errorElement: <h1>Error</h1>,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "store", element: <Store /> },
      {
        path: "/team",
        element: <TeamNavLayout />,
        children: [
          { path: "", element: <Team /> },
          { path: "mcqueen", element: <TeamMember name={"McQueen"} /> },
          { path: "sally", element: <TeamMember name={"Sally"} /> },
        ],
      },
    ],
  },
]);

function NavLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function TeamNavLayout() {
  return (
    <>
      <TeamNav />
      <Outlet context={"Hi from Outlet!"} />
    </>
  );
}
