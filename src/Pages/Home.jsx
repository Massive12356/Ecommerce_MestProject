import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import dinning from '../assets/images/dinning.png'
import living from '../assets/images/living.png'
import bedRoom from '../assets/images/bedRoom.png'

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* This ensures full height page */}
      <Navbar />
      {/* Main Content Section */}
      <main className="flex-grow">
        {" "}
        {/* This forces main to occupy leftover space */}
        {/* Hero Section */}
        <section className="h-[600px] bg-[url(assets/images/heroImg-bg.png)] bg-cover flex justify-end items-center">
          <div className="bg-[#fff3e3] w-[643px] h-[400px] flex flex-col justify-center items-center mr-20">
            <div className="w-[561px] h-[344px]">
              <p className="font-medium">New Arrival</p>
              <h1 className="text-[52px] text-[#B88E2F] font-extrabold">
                Discover Our New Collection
              </h1>
              <p className="font-medium text-gray-800 text-[18px]">
                Explore the latest trends with our exclusive new collection.
                From stylish clothing to must-have accessories, we offer
                high-quality products designed to elevate your lifestyle.
                
              </p>
              <button className="w-[222px] h-[74px] bg-[#B88E2F] text-white font-bold mt-5">
                BUY NOW
              </button>
            </div>
          </div>
        </section>
        {/* browse the range section */}
        <section className="w-full flex flex-col items-center  h-[600px] ">
          <div className="w-full h-[90px] flex flex-col justify-center items-center mt-7">
            <p className="text-2xl font-bold">Browse the Range</p>
            <h1 className="text-gray-500">
              We have lots of quality and affordable products you can choose
              from anytime!{" "}
            </h1>
          </div>

          <div className="w-[80%] h-100 flex flex-row items-center justify-around">
            <div className="w-[30%]">
              <img
                src={dinning}
                alt="dining"
                srcset=""
                className="rounded-lg"
              />
              <h1 className="w-full text-center mt-3 font-medium">Dining</h1>
            </div>
            <div className="w-[30%]">
              <img src={living} alt="dining" srcset="" className="rounded-lg" />
              <h1 className="w-full text-center mt-3 font-medium">Living</h1>
            </div>
            <div className="w-[30%]">
              <img
                src={bedRoom}
                alt="dining"
                srcset=""
                className="rounded-lg"
              />
              <h1 className="w-full text-center mt-3 font-medium">Bedroom</h1>
            </div>
          </div>
        </section>
        {/* Products Section */}
        <section className="py-8 w-full flex flex-col items-center justify-around">
          <h1 className="text-2xl font-bold text-center">Our Products</h1>
          <div className="grid grid-cols-4 gap-5 py-7">
            {products.map((product) => (
              <ProductCard
                image={product.image}
                title={product.title}
                id={product.id}
                key={product.id}
              />
            ))}
          </div>
        </section>
      </main>
      {/* Footer (now guaranteed to be at bottom) */}
      <Footer />
    </div>
  );
};

export default Home;
