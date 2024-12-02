import "../assets/Css/style.css";
import "../assets/Css/responsive.css";
import "bootstrap/dist/Css/bootstrap.min.css";
import "bootstrap/dist/Css/bootstrap.min.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Discount from "./components/Discount";
import Locations from "./components/Locations";
import Popular from "./components/Popular";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Discount />
      <Locations />
      <Popular />
    </>
  );
};

export default App;
