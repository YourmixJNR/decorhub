import React from "react";
import Layout from "../components/layout/Layout";
import ProductBreadcrumb from "../components/ProductPage/ProductBreadcrumb";
import Newsletter from "../components/newsletter/Newsletter";
import ProductLoop from "../components/ProductPage/ProductLoop";
import TabsMenu from "../components/ProductPage/TabsMenu";

const ProductPage = () => {
  return (
    <>
      <Layout>
        <ProductBreadcrumb />
        <ProductLoop />
        <TabsMenu />
        <Newsletter />
      </Layout>
    </>
  );
};

export default ProductPage;
