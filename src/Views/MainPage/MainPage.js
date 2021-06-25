import React, { useContext, useEffect, useState } from "react";
// import HeroSlider from "../../components/HeroSlider/";
import ProductsList from "../../components/ProductsList";
import ProductsPagination from "../../components/ProductsPagination";
import { storeContext } from "../../contexts/StoreContext";
import MainLayout from "../../Layouts/MainLayout";
// import MainForm from "../../components/MainForm/MainForm";
// import heroImg_1 from "../../assets/images/heroImg_1.jpg";
// import heroImg_2 from "../../assets/images/heroImg_2.jpg";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

export default function MainPage() {
  const { products, fetchProducts, total } = useContext(storeContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts(page - 1);
  }, [page]);

  // const heroSlider = [
  //   { src: heroImg_1, title: "heroImg_1" },
  //   { src: heroImg_2, title: "heroImg_2" },
  // ];

  return (
    <MainLayout>
      <Hero />
      {/* <HeroSlider slider={heroSlider} /> */}
      {/* <MainForm /> */}
      <div style={{ backgroundColor: "#fff" }}>
        <ProductsList products={products} />
        <ProductsPagination
          setPage={setPage}
          page={page}
          count={Math.ceil(total / 4)}
        />
        <Footer />
      </div>
    </MainLayout>
  );
}
