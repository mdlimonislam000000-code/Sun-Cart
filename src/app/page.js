import Hero from "@/components/shared/Hero";
import Image from "next/image";
import ProductPage from "./(main)/products/page";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <ProductPage></ProductPage>
      <Footer></Footer>
    </div>
  );
}
