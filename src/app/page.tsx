import Image from "next/image";
import Location from "@/components/Atoms/Location/Location";
import Login from "@/components/Atoms/Login/Login";
import NavBar from "@/components/Molecules/NavigationBar/NavBar";
// import CardBg from "@/components/Organisms/Card/CardBg";
import Menu from "@/components/Molecules/Menu/Menu";
import FeatureCard from "@/components/Organisms/Feature/FeatureCard";
import { Slider } from "@/components/Organisms/Card/Slider";
import Categories from "@/components/Organisms/Categories/Categories";
import Products from "@/components/Organisms/Products/Products";	
import Discount from "@/components/Organisms/Discount/Discount";
import DailyBlog from "@/components/Organisms/DailyBlog/DailyBlog";
import Company from "@/components/Molecules/Company/Company";
import Footer from "@/components/Organisms/Footer/Footer";
// import SimpleSlider from "@/components/Organisms/Card/Slider";

export default function Home() {
  return (
    <div className="">
      <NavBar/>
      
      <Menu/>
      {/* <CardBg/> */}
      {/* <SimpleSlider /> */}
      <Slider />
      <FeatureCard/>
      <Categories/>
      <Products/>
      <Discount/>
      <DailyBlog/>
      <Company/>
      <Footer/>
    </div>
  );
}
