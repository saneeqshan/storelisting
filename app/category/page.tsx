"use client";

import React from "react";
import TopNav from "../components/navs/TopNav";
import SideNav from "../components/navs/SideNav";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

const Category = () => {
  type Category = Database["public"]["Tables"]["category"]["Row"];

  const [category, setCategory] = useState<Category[] | null>(null);
  const supabase = createClientComponentClient();
  const [data, setData] = useState("category");
  const [saved, setSaved] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("category").select();

      setCategory(data);
    };

    getData();
  }, []);
  const handleSave = async () => {
    try {
      const { data: newRecord, error } = await supabase
        .from("category")
        .insert({ name: name });
      if (error) {
        console.error("Error saving data:", error);
      } else {
        console.log("Data saved successfully:", newRecord);
        setSaved(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <TopNav />
      <SideNav />
      <div>
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                {category?.length === 0 && (
                  <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
                    <header className="mb-auto flex justify-center z-50 w-full py-4">
                      <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
                        <a
                          className="flex-none text-xl font-semibold sm:text-3xl dark:text-white"
                          href="#"
                          aria-label="Brand"
                        >
                          Category
                        </a>
                      </nav>
                    </header>

                    <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                      <p className="mt-3 text-gray-600 dark:text-gray-400">
                        Oops, something went wrong.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Sorry, Add your Category.
                      </p>
                      <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                        <button
                          type="button"
                          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                          data-hs-overlay="#hs-vertically-centered-modal"
                        >
                          <svg
                            className="w-3 h-3"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                          </svg>{" "}
                          Add Category
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {category?.length && (
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                          Category
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Add Category, edit and more.
                        </p>
                      </div>

                      <div>
                        <div className="inline-flex gap-x-2 items-center justify-center ">
                          <button className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800 w-30 h-11">
                            View all
                          </button>
                          <div className=" flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                            <button
                              type="button"
                              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                              data-hs-overlay="#hs-vertically-centered-modal"
                            >
                              <svg
                                className="w-3 h-3"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                />
                              </svg>{" "}
                              Add Category
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {category?.length && (
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-slate-800">
                          <tr>
                            <th
                              scope="col"
                              className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3 text-left"
                            >
                              <div className="flex items-center gap-x-2 ml-6">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                  Name
                                </span>
                              </div>
                            </th>

                            <th scope="col" className="px-6 py-3 text-left">
                              <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                  category
                                </span>
                              </div>
                            </th>

                            <th scope="col" className="px-6 py-3 text-left">
                              <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                  Created
                                </span>
                              </div>
                            </th>
                          </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                          {category?.map((category) => (
                            <tr>
                              <td className="h-px w-px whitespace-nowrap">
                                <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                                  <div className="flex items-center gap-x-3 ml-6">
                                    <img
                                      className="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                                      src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                      alt="Image Description"
                                    />
                                    <div className="grow ">
                                      <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                        {category.name}
                                      </span>
                                      <span className="block text-sm text-gray-500">
                                        4566
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="h-px w-72 whitespace-nowrap">
                                <div className="px-6 py-3">
                                  <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                    Director
                                  </span>
                                  <span className="block text-sm text-gray-500">
                                    Human resources
                                  </span>
                                </div>
                              </td>

                              <td className="h-px w-px whitespace-nowrap">
                                <div className="px-6 py-1.5">
                                  <a
                                    className="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
                                    href="#"
                                  >
                                    Edit
                                  </a>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}

                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-800 dark:text-gray-200">
                            6
                          </span>{" "}
                          results
                        </p>
                      </div>

                      <div>
                        <div className="inline-flex gap-x-2">
                          <button
                            type="button"
                            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                          >
                            <svg
                              className="w-3 h-3"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                              />
                            </svg>
                            Prev
                          </button>

                          <button
                            type="button"
                            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                          >
                            Next
                            <svg
                              className="w-3 h-3"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* //form category */}
                <div
                  id="hs-vertically-centered-modal"
                  className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
                >
                  <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                      <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                        <h3 className="font-bold text-gray-800 dark:text-white">
                          Add Category
                        </h3>
                        <button
                          type="button"
                          className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                          data-hs-overlay="#hs-vertically-centered-modal"
                        >
                          <span className="sr-only">Close</span>
                          <svg
                            className="w-3.5 h-3.5"
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="p-4 overflow-y-auto">
                        <p className="text-gray-800 dark:text-gray-400">
                          <div className="w-full  px-3">
                            <label className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2">
                              Name :
                            </label>
                            <input
                              type="text"
                              name="name"
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            />
                          </div>
                        </p>
                      </div>
                      <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                        <button
                          type="button"
                          className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                          data-hs-overlay="#hs-vertically-centered-modal"
                        >
                          Close
                        </button>
                        <button
                          onClick={handleSave}
                          className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                          data-hs-overlay="#hs-vertically-centered-modal"
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
