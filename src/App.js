import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/homepage";
import Homepage1 from "./pages/homepage1";
import Homepage2 from "./pages/homepage2";
import Loginpage from "./pages/login";
import UserRegistrationForm from "./pages/register";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/homepage1":
        title = "";
        metaDescription = "";
        break;
        case "/login":
          title = "";
          metaDescription = "";
          break;
          case "/register":
          title = "";
          metaDescription = "";
          break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/homepage" element={<Homepage1 />} />
      <Route path="/homepage1" element={<Homepage2 />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/register" element={<UserRegistrationForm />} />
    </Routes>
  );
}
export default App;
