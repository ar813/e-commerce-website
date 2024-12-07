import Hero from "./component/Hero/Hero";
import Today from "./component/Today/Today";
import Categories from "./component/Categories/Categories";
import ThisMonth from "./component/ThisMonth/ThisMonth";
import HeroTwo from "./component/HeroTwo/HeroTwo";
import Products from "./component/Products/Products";
import Featured from "./component/Featured/Featured";
import LastInHome from "./component/LastInHome/LastInHome";

export default function Home() {
  return (
    
      <div className="lg:px-[80px]">
        <Hero />
        <Today />
        <Categories />
        <ThisMonth />
        <HeroTwo />
        <Products />
        <Featured />
        <LastInHome />
      </div>
    
  );
}
