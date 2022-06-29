import "./App.css";
import AOS from "aos";
// import "aos/dist/aos.css";
import Home from "./pages/Home";

function App() {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });

  return <Home />;
}

export default App;
