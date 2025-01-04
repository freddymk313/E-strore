import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
// import Cart from "@/components/Cart";
import TopProducts from "@/components/home/TopProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <TopProducts />
      <Products />
      <Products />
      <Products />
      <Products />
      {/* <Cart /> */}
    </>
  );
}
