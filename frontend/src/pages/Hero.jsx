import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Hero = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await axios("/api/products");
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setError("Failed to load products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="text-center py-20">Loading products...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-center py-20 text-red-600">{error}</div>
      </Layout>
    );
  }

  if (!products.length) {
    return (
      <Layout>
        <div className="text-center py-20">No products found.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="grid py-10 grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </section>
    </Layout>
  );
};

export default Hero;
