"use client";
import Image from "next/image";
import { Search, ShoppingBag } from "react-feather";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import Category from "@/app/category/page";
import TopNav from "../navs/TopNav";
import SideNav from "../navs/SideNav";
import React from "react";
import { array } from "zod";
import { handleClientScriptLoad } from "next/script";
import { supabase } from "@supabase/auth-ui-shared";
import { config } from "process";

export default function StorePreview() {
  const supabase = createClientComponentClient();
  type Products = Database["public"]["Tables"]["products"]["Row"];
  type Category = Database["public"]["Tables"]["category"]["Row"];
  const [searchProducts, setSearchProducts] = useState("");
  const [categories, setCategory] = useState<Category[] | null>(null);
  const [products, setProducts] = useState<Products[] | null>(null);
  interface CartItem {
    id: string;
    name: string;
    price: number;
    mrp: number;
    quantity: number;
  }
  const [cart, setCart] = useState<CartItem[]>();

  const setCartItem = (item: CartItem) => {
    setCart([item, ...(cart ?? [])]);
  };
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await supabase.from("products").select();
      setProducts(data);
    };
    const getCategory = async () => {
      const { data } = await supabase.from("category").select();
      setCategory(data);
    };
    getCategory();
    getProduct();
  }, []);
  const [count, setCountpreview] = React.useState<number>(0);
  const [buttonView, setButtonView] = React.useState(true);

  const inc = () => {
    setCountpreview(count + 1);
  };

  const dec = () => {
    setCountpreview(count - 1);
  };

  const setCartDecrease = (item: CartItem) => {
    // Check if the item is already in the cart
    const existingItem = cart?.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item is already in the cart, update its quantity
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it with a default quantity of +1
      setCart([{ ...item, quantity: 1 }, ...(cart ?? [])]);
    }
    setCartItem({
      id: product.id,
      name: product.name,
      price: product.price ?? 0,
      mrp: product.mrp ?? 0,
      quantity: 1 ?? 0,
    });
  };

  //*CartItemIncrease button code*/
  const setCartItemIncrease = (id: string) => {
    // Your existing code for decrementing item quantity\
    const existingItem = cart.findIndex((cartItem) => cartItem.id === id);
    if (existingItem !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItem] = {
        ...updatedCart[existingItem],
        quantity: updatedCart[existingItem].quantity - 1,
      };
      // Handle the case where quantity becomes zero and remove the item if needed
      if (updatedCart[existingItem].quantity === 0) {
        updatedCart.splice(existingItem, 1);
      }
      setCart(updatedCart);
    }
  };
  //*cartItemsdelete button code*//
  const setCartItemDelete = (id: string) => {
    // Find the index of the item in the cart
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === id);

    // Create a copy of the cart array
    const updatedCart = [...cart];

    // Remove the item from the updatedCart array
    updatedCart.splice(existingItemIndex);

    // Set the updated cart using setCart
    setCart(updatedCart);
  };

  //*search products code*//

  const searchProduct = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select()
        .textSearch("name", searchProducts);

      if (error) {
        console.error("Error fetching products:", error.message);
        // Handle error as needed
      } else {
        console.log("Search results:", data);
        setProducts(data);
      }
    } catch (error) {
      console.error("Error in searchProduct function:", error.message);
      // Handle error as needed
    }
  };

  useEffect(() => {
    if (searchProducts.length === 0) {
      // If searchProducts is empty, fetch and display all products
      const fetchAllProducts = async () => {
        try {
          const { data, error } = await supabase.from("products").select();

          if (error) {
            console.error("Error fetching all products:", error.message);
            // Handle error as needed
          } else {
            console.log("All products:", data);
            setProducts(data);
          }
        } catch (error) {
          console.error("Error in fetchAllProducts function:", error.message);
          // Handle error as needed
        }
      };

      fetchAllProducts();
    } else {
      // If searchProducts is not empty, perform the search
      searchProduct();
    }
  }, [searchProducts]);
  interface CartItem {
    id: string;
    name: string;
    price: number;
    mrp: number;
    quantity: number; // Add this property for quantity
  }
  const calculateTotalPrice = (): number => {
    if (!cart || cart.length === 0) {
      return 0; // If the cart is empty, the total price is zero
    }

    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <TopNav />
      <SideNav />
      <div className="max-w-xs m-auto p-3 bg-white rounded-3xl  max-h-[600px] overflow-y-auto scrollbar-hide">
        <header className="flex justify-between items-center">
          <Image
            src="/assets/peedi-icon-logo.svg"
            width={130}
            alt="Peedi"
            height={90}
          ></Image>
          <button
            type="button"
            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border 
            border-transparent font-semibold  text-white  focus:outline-none
                transition-all text-sm "
            data-hs-overlay="#hs-overlay-right"
          >
            <ShoppingBag color="#4DB547" size={28}></ShoppingBag>
          </button>
          <div
            id="hs-overlay-right"
            className="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 right-0 transition-all duration-300 transform h-full max-w-xs w-full  z-[60] bg-white border-l dark:bg-gray-800 dark:border-gray-700 "
            tabIndex="-1"
          >
            <div className="flex  items-center py-3 px-4 border-b dark:border-gray-700">
              {/* <h3 className="font-bold text-gray-800 dark:text-white flex items-center">
                <ShoppingBag color="#4DB547" size={28}></ShoppingBag> My Cart
              </h3> */}
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700  text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-overlay-right"
              >
                <span className="sr-only">Close modal</span>
                <svg
                  className="flex-shrink-0 w-5.5 h-5.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              Back to store
            </div>

            <div className="max-w-xs m-auto p-3 flex justify-between items-center  border-dashed border-white  max-h-[600px] overflow-y-auto scrollbar-hide bg-[#D4FFD1]">
              <Image
                src="/assets/peedi-icon-logo.svg"
                width={130}
                alt="Peedi"
                height={90}
              ></Image>

              <div>
                <p className="text-gray-800 dark:text-gray-400 font-bold">
                  Total : ₹{calculateTotalPrice()}
                </p>
              </div>
            </div>
            <div className="p-4">
              <main className="grid grid-row-1 gap-2 overflow-auto">
                {cart?.map((cartItem: CartItem) => (
                  <div>
                    <div className="flex flex-row-1 bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                      <Image
                        className="w-full h-auto rounded-t-xl"
                        src="/assets/img2.jpg"
                        width={50}
                        height={50}
                        alt="Image Description"
                      />

                      <div className="p-1 md:p-5 flex gap-8 items-center ">
                        <div>
                          <h3 className=" font-bold text-sm text-gray-800 dark:text-white capitalize">
                            {cartItem.name}
                          </h3>
                          <p className="mt-1 text-xs text-gray-800 dark:text-gray-400">
                            per{cartItem.quantity}
                          </p>
                        </div>
                        {/* <div className="flex items-center mt-3">
                          <button
                            className="hs-tooltip-toggle mr-1 w-4 h-4 inline-flex justify-center items-center  rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white"
                            onClick={dec}
                          >
                            -
                          </button>

                          <input className="w-5 h-3" type="num" value={count} />

                          <button
                            className="hs-tooltip-toggle w-4 h-4 inline-flex justify-center items-center  rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white"
                            onClick={inc}
                          >
                            +
                          </button>
                        </div> */}
                        <div>
                          <p className="text-gray-800 dark:text-gray-400  font-bold">
                            ₹{cartItem.price}
                          </p>
                        </div>
                        <button
                          className="text-gray-500 hover:text-red-600"
                          onClick={() => setCartItemDelete(cartItem.id)}
                        >
                          <svg
                            className="flex-shrink-0 w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            <line x1="10" x2="10" y1="11" y2="17" />
                            <line x1="14" x2="14" y1="11" y2="17" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </main>
              <button className="mt-3 w-full py-2 px-2 inline-flex justify-center items-end gap-2 rounded-md border border-transparent font-semibold bg-peedi-primary text-white hover:bg-peedi-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-xs dark:focus:ring-offset-gray-800">
                Confirm Order
              </button>
            </div>
          </div>
        </header>
        <section className="mt-6">
          <div className="flex rounded-md shadow-sm">
            <input
              type="text"
              placeholder="Search"
              value={searchProducts}
              onChange={(e) => setSearchProducts(e.target.value)}
              className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus-visible:outline-none dark:text-gray-400"
            />
            <button
              type="button"
              className="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-r-md border border-transparent font-semibold bg-white text-peedi-primary focus:z-10 focus:outline-none transition-all text-sm"
              onClick={searchProduct}
            >
              <Search></Search>
            </button>
          </div>
        </section>
        <nav className="flex space-x-6 overflow-auto scrollbar-hide">
          <a
            href="#"
            className="py-4 px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-peedi-secondary hover:text-peedi-primary"
          >
            All
          </a>
          {categories?.map((category) => (
            <a
              href="#"
              className="py-4 font-bold px-1 inline-flex items-center gap-2 text-sm  whitespace-nowrap text-peedi-primary hover:text-peedi-primary capitalize"
              aria-current="page"
            >
              {category.name}
            </a>
          ))}
        </nav>

        <main className="grid grid-cols-2 gap-2">
          {products?.map((product: Products) => (
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <Image
                className="w-full h-auto rounded-t-xl"
                src="/assets/img2.jpg"
                width={100}
                height={100}
                alt="Image Description"
              />
              <div className="p-1 md:p-2">
                <h3 className=" font-bold text-gray-800 dark:text-white">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs text-gray-800 dark:text-gray-400">
                  ₹ {product.price} /per
                </p>
                {cart?.find((cartItem) => cartItem.id === product.id) ===
                undefined ? (
                  <button
                    className="mt-3 w-full py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-peedi-primary text-white hover:bg-peedi-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-xs dark:focus:ring-offset-gray-800"
                    onClick={() =>
                      setCartItem({
                        id: product.id,
                        name: product.name,
                        price: product.price ?? 0,
                        mrp: product.mrp ?? 0,
                        quantity: 1 ?? 0,
                      })
                    }
                  >
                    Add
                  </button>
                ) : (
                  <div className="flex items-center mt-3">
                    <button
                      className="hs-tooltip-toggle mr-1 w-4 h-4 inline-flex justify-center items-center  rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white"
                      onClick={() => setCartItemIncrease(product.id)}
                    >
                      -
                    </button>

                    <input
                      className="w-5 h-3"
                      type="num"
                      value={
                        cart?.find((cartItem) => cartItem.id === product.id)
                          ?.quantity || 0
                      }
                    />

                    <button
                      className="hs-tooltip-toggle mr-1 w-4 h-4 inline-flex justify-center items-center  rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-white/[.05] dark:hover:border-white/[.1] dark:hover:text-white"
                      data-hs-overlay="#hs-overlay-right"
                      onClick={() =>
                        setCartDecrease({
                          id: product.id,
                          name: product.name,
                          price: product.price ?? 0,
                          mrp: product.mrp ?? 0,
                          quantity: 1 ?? 0,
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}

/* <div className="flex rounded-md shadow-sm">
<input
  type="text"
  placeholder="Search"
  name="hs-trailing-button-add-on-with-icon"
  className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus-visible:outline-none   dark:text-gray-400"
  value={searchTerm}
  onChange={handleSearchChange}
/>
<button
  type="button"
  className="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-r-md border border-transparent font-semibold bg-white  text-peedi-primary  focus:z-10 focus:outline-none focus:ring-2  transition-all text-sm"
>
  <Search></Search>
</button>
</div>
</section>
{/* ... existing code ... */

/* <main className="grid grid-cols-2 gap-2">
{filteredProducts?.map((product: Products) => (
// ... existing product rendering code ...
))}
</main> */
