import "../assets/Css/style.css";
import "../assets/Css/responsive.css";
import "bootstrap/dist/Css/bootstrap.min.css";
import "bootstrap/dist/Css/bootstrap.min.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Discount from "./components/Discount";
import Locations from "./components/Locations";
import Popular from "./components/Popular";
import Feature from "./components/Feature";
import SearchFood from "./components/SearchFood";
import Discounts from "./components/Discounts";
import CrispySandwiches from "./components/CrispySandwiches";
import FriedChicken from "./components/FriedChicken";
import SpicyPizza from "./components/SpicyPizza";
import Order from "./components/Order";
import Cities from "./components/Cities";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Discount />
      <Locations />
      <Popular />
      <Feature />
      <SearchFood />
      <Discounts />
      <CrispySandwiches />
      <FriedChicken />
      <SpicyPizza />
      <Order />
      <Cities />
    </>
  );
};

export default App;
