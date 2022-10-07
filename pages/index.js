import Categories from "../components/categories";
import Category from "../components/category";
import Features from "../components/features";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Heros from "../components/heros";
import Products from "../components/products";
import Services from "../components/services";


export default function Home() {
  return (
    <div>
      <div className="bg-bg-hero h-64 md:h-[35rem] bg-cover bg-center text-white">
        <div className="flex max-w-7xl mx-auto py-10 justify-between px-5">
          <div>Logo</div>
          <div>Menu</div>
        </div>
      </div>
      <Heros />
      <Category/>
      <Services/>
      {/* <Categories/> */}
      {/* <Features /> */}
      <Products />
      <Footer/>
    </div>
  )
}
