import "./home.css";
import Navbar from "../../components/NavBar/Navbar";
import { Header } from "../../components/Header/Header";
import { FeaturedCities } from "../../components/FeaturedCities/FeaturedCities";
import { PropertyList } from "../../components/PropertyList/PropertyList";
import { FeaturedProperties } from "../../components/FeaturedProperties/FeaturedProperties";
import { MailList } from "../../components/Mail/MailList";
import { FooterList } from "../../components/Footer/FooterList";

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <h3 className="homeTitle">Explore Netherlands</h3>
          <FeaturedCities/>
          <h3 className="homeTitle">Browse by property type</h3>
          <PropertyList/>
          <h3 className="homeTitle">Homes guests love</h3>
          <FeaturedProperties/>
          <MailList/>
          <FooterList/>
        </div>
    </div>
  )
}
