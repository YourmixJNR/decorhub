import React from "react";
import Layout from "../components/layout/Layout";
import ProductBreadcrumb from "../components/ProductPage/ProductBreadcrumb";
import Newsletter from "../components/newsletter/Newsletter";
import ProductLoop from "../components/ProductPage/ProductLoop";
import TabsMenu from "../components/ProductPage/Tabs/TabsMenu";

const ProductPage = () => {
  return (
    <>
      <Layout>
        <ProductBreadcrumb />
        <ProductLoop />
        <Newsletter />
        <TabsMenu />
      </Layout>
    </>
  );
};

export default ProductPage;
