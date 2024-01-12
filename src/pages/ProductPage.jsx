import React from "react";
import Layout from "../components/layout/Layout";
import ProductBreadcrumb from "../components/ProductPage/ProductBreadcrumb";
import Newsletter from "../components/newsletter/Newsletter";
import ProductLoop from "../components/ProductPage/ProductLoop";

const ProductPage = () => {
  return (
    <>
      <Layout>
        <ProductBreadcrumb />
        <ProductLoop />
        <Newsletter />
      </Layout>
    </>
  );
};

export default ProductPage;
