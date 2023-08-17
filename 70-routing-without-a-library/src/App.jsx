import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";

export default function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/store":
      component = <Store />;
      break;
    default:
      component = "Hi";
      break;
  }
  return (
    <>
      {component}
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/store">Store</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
