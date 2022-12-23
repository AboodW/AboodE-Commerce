import React from "react";
import { client } from "../lib/client";
import { HeroBanner, FooterBanner, Product } from "../components";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner
        heroBanner={bannerData.length > 0 ? bannerData[0] : alert("Error")}
      />

      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>Speaker there are many variations passages</p>
      </div>

      <div className="products-container">
        {products?.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>

      <FooterBanner
        footerBanner={bannerData.length > 0 ? bannerData[0] : alert("Error")}
      />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;
