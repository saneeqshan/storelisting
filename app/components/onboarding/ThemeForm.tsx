import React from "react";

export default function OnboardingThemeForm() {
  return (
    <div className="mt-6">
      <label className="block mt-4">
        Logo:
        <div className="relative pr-4 box-content mt-2">
          <input
            type="file"
            placeholder="Upload Your Logo"
            className="py-3 px-4 block w-full border-[#E9EEF3] border  rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          />
        </div>
      </label>
      <div className="block mt-6">
        Select Color Theme:
        <div className="flex items-center gap-2 justify-between mt-3 text-sm">
          <div className="flex gap-4 items-center">
            <input type="color" className="w-8 h-8" value="#4DB547" />
            Primary Color
          </div>
          <div className="flex items-center gap-4 text-sm">
            <input type="color" className="w-8 h-8" value="#022131" />
            Secondary Color
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-6 mt-8  ">
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
          Create Store
        </button>
      </div>
    </div>
  );
}
