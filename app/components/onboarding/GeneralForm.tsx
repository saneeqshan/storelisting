import React from "react";

export default function OnboardingGeneralForm() {
  return (
    <form className="mt-4">
      <label>
        Name:
        <div className="relative">
          <input
            type="text"
            placeholder="Your Shop Name"
            className="py-3 px-4 block w-full border-[#E9EEF3] border  rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          />
        </div>
      </label>
      <div className="mt-4">
        <label className="block text-sm font-medium dark:text-white">
          Website URL
        </label>
        <div className="relative">
          <input
            type="url"
            id="hs-inline-add-on"
            name="hs-inline-add-on"
            className="py-3 px-4 pl-32 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Your store link"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
            <span className="text-sm text-gray-500">http://peedi.in/</span>
          </div>
        </div>
      </div>
      <label className="block mt-4">
        Phone:
        <div className="relative">
          <input
            type="tel"
            placeholder="Your Shop Contact"
            className="py-3 px-4 block w-full border-[#E9EEF3] border  rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          />
        </div>
      </label>
      <label className="block mt-4">
        Address:
        <div className="relative">
          <textarea
            placeholder=" Your Shop Address"
            className="py-3 px-4 block w-full border-[#E9EEF3] border  rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          ></textarea>
        </div>
      </label>

      <div className="mt-4">
        Type:
        <div
          className="hs-dropdown relative block"
          data-hs-dropdown-auto-close="inside"
        >
          <button
            id="hs-dropdown-item-checkbox"
            type="button"
            className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
          >
            Select store type
            <svg
              className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <div
            className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700"
            aria-labelledby="hs-dropdown-item-checkbox"
          >
            <div className="relative flex items-start py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="flex items-center h-5 mt-1">
                <input
                  id="hs-dropdown-item-radio-delete"
                  name="hs-dropdown-item-radio"
                  type="radio"
                  className="border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  aria-describedby="hs-dropdown-item-radio-delete-description"
                  checked
                />
              </div>
              <label className="ml-3.5">
                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300">
                  Delete
                </span>
                <span
                  id="hs-dropdown-item-radio-delete-description"
                  className="block text-sm text-gray-600 dark:text-gray-500"
                >
                  Notify me when this action happens.
                </span>
              </label>
            </div>
            <div className="relative flex items-start py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="flex items-center h-5 mt-1">
                <input
                  id="hs-dropdown-item-radio-archive"
                  name="hs-dropdown-item-radio"
                  type="radio"
                  className="border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  aria-describedby="hs-dropdown-item-radio-archive-description"
                />
              </div>
              <label className="ml-3.5">
                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300">
                  Archive
                </span>
                <span
                  id="hs-dropdown-item-radio-archive-description"
                  className="block text-sm text-gray-600 dark:text-gray-500"
                >
                  Notify me when this action happens.
                </span>
              </label>
            </div>
            <div className="relative flex items-start py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="flex items-center h-5 mt-1">
                <input
                  id="hs-dropdown-item-radio-archive"
                  name="hs-dropdown-item-radio"
                  type="radio"
                  className="border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  aria-describedby="hs-dropdown-item-radio-archive-description"
                />
              </div>
              <label className="ml-3.5">
                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300">
                  Archive
                </span>
                <span
                  id="hs-dropdown-item-radio-archive-description"
                  className="block text-sm text-gray-600 dark:text-gray-500"
                >
                  Notify me when this action happens.
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-4">
        <label className="flex ">
          <input
            type="checkbox"
            className="shrink-0 mt-0.5 mr-2 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          />
          I&apos;ve read and accept the terms and conditions
        </label>
      </div>
      <div className="flex items-center justify-end gap-6 mt-4  ">
        <button
          type="reset"
          className="py-3 px-8 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
        >
          Reset
        </button>
        <button
          type="submit"
          className="py-3 px-8 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-peedi-primary text-white hover:bg-peedi-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
