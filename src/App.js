import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AllRoutes from "./routes";
import Loader from "./components/Loader";

function App() {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });

  const { pathname } = useLocation();

  console.log("pathname", pathname);

  const [isReady, setIsReady] = useState(false);

  useEffect(
    () => {
      if (pathname === "/") {
        const timer = setTimeout(() => {
          setIsReady("ready");
        }, 3500);

        return () => clearTimeout(timer);
      }

      const timer = setTimeout(() => {
        setIsReady("ready");
      }, 0);

      return () => clearTimeout(timer);
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      {isReady && <AllRoutes />}
      {!isReady && <Loader />}
    </>
  );
}

export default App;
