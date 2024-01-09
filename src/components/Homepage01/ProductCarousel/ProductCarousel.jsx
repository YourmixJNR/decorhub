import React from "react";
import { Link } from "react-router-dom";
import NewArrival1 from "../../../assets/images/newarrival1.jpg";
import NewArrival2 from "../../../assets/images/newarrival2.jpg";
import NewArrival3 from "../../../assets/images/newarrival3.jpg";
import NewArrival4 from "../../../assets/images/newarrival4.jpg";
import { ReactComponent as RightArrow } from "../../../assets/icons/arrow-right-room.svg";
import { ReactComponent as AddToWhishList } from "../../../assets/icons/add-to-wishlist.svg";
import "./ProductCarousel.css";

const ProductCarousel = () => {
  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="flex items-end justify-between mx-8 xl:mx-40">
          <div>
            <h2 className="font-poppins font-medium text-[2.1rem] leading-8">
              New <br />
              Arrivals
            </h2>
          </div>
          <div>
            <Link
              to="#"
              className="hidden sm:flex items-center space-x-1 border-b border-neutral-900"
            >
              <span>More Products</span>
              <RightArrow />
            </Link>
          </div>
        </div>
        <div className="ml-8 xl:ml-40">
          <div className="flex gap-4 overflow-x-auto">
            {newArrivals.map((product) => (
              <div key={product.id} className="product-container">
                <div className="flex">
                  <div
                    className="flex bg-cover bg-center relative w-56 h-[19rem] md:w-64"
                    style={{
                      backgroundImage: `url(${product.image})`,
                    }}
                  >
                    <div className="flex gap-2 flex-col absolute top-12 left-14 transform -translate-x-1/2 -translate-y-1/2">
                      <p className="py-1 px-[0.87rem] font-inter text-base font-bold bg-white text-black uppercase rounded-[0.25rem]">
                        {product.category}
                      </p>
                      <p className="py-1 px-[0.87rem] font-inter text-base font-bold bg-green-500 text-white uppercase rounded-[0.25rem]">
                        {product.discountPercent}
                      </p>
                    </div>
                    <AddToWhishList className="wishlist-icon absolute top-10 left-[88%] transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
                    <button className="add-to-cart-btn absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-inter text-base font-medium bg-black flex justify-center text-white w-48 rounded-md py-2 px-6">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p>{product.star}</p>
                  <h3 className="font-inter text-base font-semibold">
                    {product.name}
                  </h3>
                  <p className="font-inter text-sm font-semibold">
                    ${product.price}{" "}
                    <span className="font-normal line-through text-gray-500">
                      ${product.discount}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden my-8 mx-8 xl:mx-40">
        <Link
          to="#"
          className="sm:hidden flex items-center space-x-1 border-b w-36 border-neutral-900"
        >
          <span>More Products</span>
          <RightArrow />
        </Link>
      </div>
    </>
  );
};

export default ProductCarousel;

const newArrivals = [
  {
    id: 1,
    name: "Loveseat Sofa",
    image: NewArrival1,
    price: 100.0,
    discount: 50.0,
    discountPercent: "-50%",
    star: "★ ★ ★ ★ ★",
    category: "New",
  },
  {
    id: 2,
    name: "Table Lamp",
    image: NewArrival2,
    price: 200.0,
    discount: 10.0,
    discountPercent: "-50%",
    star: "★ ★ ★ ★ ★",
    category: "New",
  },
  {
    id: 3,
    name: "Beige Table Lamp",
    image: NewArrival3,
    price: 300.0,
    discount: 150.0,
    discountPercent: "-50%",
    star: "★ ★ ★ ★ ★",
    category: "New",
  },
  {
    id: 4,
    name: "Bamboo basket",
    image: NewArrival4,
    price: 400.0,
    discount: 200.0,
    discountPercent: "-50%",
    star: "★ ★ ★ ★ ★",
    category: "New",
  },
  {
    id: 5,
    name: "Toasted",
    image: NewArrival2,
    price: 500.0,
    discount: 250.0,
    discountPercent: "-50%",
    star: "★ ★ ★ ★ ★",
    category: "New",
  },
];
