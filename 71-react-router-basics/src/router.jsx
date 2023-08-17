import { createBrowserRouter } from "react-router-dom";
// import { Route, createRoutesFromElements } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";

// Router with objects
export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/store", element: <Store /> },
]);

// Router with jsx
// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/store" element={<Store />} />
//     </>
//   )
// );
