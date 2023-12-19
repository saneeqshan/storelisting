import React from "react";
import { isAuthenticated } from "../utility/auth";
import { redirect } from "next/navigation";
import PeediLogo from "../components/common/Logo";
import OnboardingGeneralForm from "../components/onboarding/GeneralForm";
import OnboardingThemeForm from "../components/onboarding/ThemeForm";
import StorePreview from "../components/store/Preview";

export default async function OnboardingPage() {
  // If not authenticated, redirect to the homepage
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    return redirect("/");
  }

  return (
    <main>
      <div className="container-fluid">
        <div className="h-screen md:overflow-hidden">
          <div className="container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 min-h-screen">
              <div className="bg-peedi-light dark:bg-peedi-secondary md:p-12 overflow-auto h-screen max-w-[700px]">
                <PeediLogo isCenter={false}></PeediLogo>
                <div className="border-b border-gray-200 dark:border-gray-700 flex justify-between">
                  <h3 className="text-peedi-primary font-bold mt-4">
                    Get Started
                  </h3>
                  <nav
                    className="-mb-0.5 flex justify-end space-x-6"
                    aria-label="Tabs"
                    role="tablist"
                  >
                    <button
                      type="button"
                      className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 active"
                      id="horizontal-right-alignment-item-1"
                      data-hs-tab="#horizontal-right-alignment-1"
                      aria-controls="horizontal-right-alignment-1"
                      role="tab"
                    >
                      General
                    </button>
                    <button
                      type="button"
                      className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600"
                      id="horizontal-right-alignment-item-2"
                      data-hs-tab="#horizontal-right-alignment-2"
                      aria-controls="horizontal-right-alignment-2"
                      role="tab"
                    >
                      Theme
                    </button>
                  </nav>
                </div>

                <div className="mt-3">
                  <div
                    id="horizontal-right-alignment-1"
                    role="tabpanel"
                    aria-labelledby="horizontal-right-alignment-item-1"
                  >
                    <OnboardingGeneralForm />{" "}
                  </div>
                  <div
                    id="horizontal-right-alignment-2"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="horizontal-right-alignment-item-2"
                  >
                    <OnboardingThemeForm></OnboardingThemeForm>
                  </div>
                </div>
              </div>
              <div className="bg-white after:bg-white block absolute -z-0 w-[50vw] top-0 right-0 h-screen">
                <h2 className=" mb-5 text-center font-bold text-peedi-secondary text-2xl mt-8">
                  My Online Peedi
                </h2>
                <figure
                  className="mx-auto  max-w-xs h-auto"
                  style={{ zoom: 0.8 }}
                >
                  <div className="p-2 bg-gray-800 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                    <StorePreview></StorePreview>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
