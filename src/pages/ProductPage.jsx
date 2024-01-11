import React from "react";
import Layout from "../components/layout/Layout";
import ProductBreadcrumb from "../components/ProductPage/ProductBreadcrumb";
import Newsletter from "../components/newsletter/Newsletter";

const ProductPage = () => {
  return (
    <>
      <Layout>
        <ProductBreadcrumb />
        <Newsletter />
      </Layout>
    </>
  );
};

export default ProductPage;
