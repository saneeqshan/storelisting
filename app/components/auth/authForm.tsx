"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { SignInWithPasswordlessCredentials } from "@supabase/supabase-js";
import { useState } from "react";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TauthSchema, authSchema } from "@/lib/form.types";
import PeediLogo from "../common/Logo";

const AuthForm = () => {
  const supabase = createClientComponentClient<Database>();
  const hostname = window.location.origin;

  const [inputValue, setInputValue] = useState("");
  const [isPhone, setIsPhone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TauthSchema>({
    resolver: zodResolver(authSchema),
  });

  const handleInputChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setInputValue(value);

    // Check if the input value is a number
    if (!isNaN(value) && !isNaN(parseFloat(value))) {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
  };

  const handleSignUp = async (data: TauthSchema) => {
    console.log("submit");
    console.log(data);

    let formData: SignInWithPasswordlessCredentials;

    if (isPhone) {
      formData = {
        phone: "+91" + data.emailOrPhone,
        options: {
          data: {
            user_type: "BUSINESS",
          },
        },
      };
    } else {
      formData = {
        email: data.emailOrPhone,
        options: {
          data: {
            user_type: "BUSINESS",
          },
        },
      };
    }

    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithOtp(formData);
      setIsLoading(false);

      if (error)
        return setErrorMessage("Oops, something went wrong. Please try again.");
      setShowOTPForm(true);
    } catch (e) {
      setIsLoading(false);
      console.error("Error signing in with OTP:", e);
    }
  };

  return (
    <div className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3 relative z-50">
      <div className="w-full bg-peedi-light xl:p-12 p-10 dark:bg-[#000]">
        <div className="flex h-[90vh] flex-col">
          <div className="my-auto">
            <div className="text-center mb-2">
              <PeediLogo isCenter></PeediLogo>
              <h5 className="text-gray-600 dark:text-gray-100 mt-6">
                Welcome Back !
              </h5>
              <p className="text-gray-500 dark:text-gray-100/60 mt-1">
                Sign in to continue to Peedi.
              </p>
            </div>
            <Auth
              supabaseClient={supabase}
              view="sign_in"
              onlyThirdPartyProviders
              otpType={"sms"}
              appearance={{ theme: ThemeSupa }}
              theme={
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "default"
              }
              showLinks={false}
              providers={["google", "facebook", "twitter"]}
              redirectTo={hostname + "/auth/callback"}
              socialLayout="horizontal"
              localization={{
                variables: {
                  magic_link: {
                    email_input_label: "Email address",
                    email_input_placeholder: "Your email address",
                    button_label: "Continue",
                    loading_button_label: "Sending Login Link ...",
                    link_text: "Send a login link email",
                    confirmation_text: "Check your email for the login link",
                  },
                },
              }}
            />
            <hr className="dark:border-gray-700 mt-6"></hr>
            <div className="mt-4">
              {!showOTPForm && (
                <div>
                  <form onSubmit={handleSubmit(handleSignUp)}>
                    <label className="block text-sm text-gray-700 font-medium dark:text-white mb-2">
                      Email/Phone
                    </label>
                    <div className="flex rounded-md shadow-sm">
                      <div className="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 dark:bg-[#252525] dark:border-none">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {isPhone ? "+91" : "Email"}
                        </span>
                      </div>
                      <input
                        {...register("emailOrPhone")}
                        type="text"
                        onChange={handleInputChange}
                        className="py-3 px-4 pr-11 block w-full border border-gray-300 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-[#2e2e2e] dark:border-[#2e2e2e] dark:text-gray-400"
                        placeholder="Enter Email/Phone"
                      />
                    </div>
                    {errors.emailOrPhone && (
                      <p className="text-sm text-red-600 mt-2">{`${errors.emailOrPhone.message}`}</p>
                    )}
                    {!isLoading && (
                      <button
                        type="submit"
                        className="mt-4 w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold  bg-[#4DB547] text-white hover:bg-[#022131] dark:hover:bg-white dark:hover:text-[#022131] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      >
                        Continue
                      </button>
                    )}
                  </form>
                </div>
              )}

              {showOTPForm && (
                <form method="post" action="/auth/signin">
                  <label className="block text-sm text-gray-700 font-medium dark:text-white mb-2">
                    Enter OTP
                  </label>
                  <div className="flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="otp"
                      id="hs-input-with-add-on-url"
                      className="py-3 px-4 pr-11 block w-full border-gray-200 shadow-sm rounded-r-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="X X X X X X"
                      max={6}
                    />
                    <input type="hidden" name="id" value={inputValue} />
                    <input
                      type="hidden"
                      name="type"
                      value={isPhone ? "sms" : "email"}
                    />
                  </div>
                  <button
                    formAction="/auth/signin"
                    className="mt-4 w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border hover:bg-[#022131] dark:hover:bg-[#fff] dark:hover:text-[#022131] border-transparent font-semibold  bg-[#4DB547] text-white  dark:border-[#2e2e2e] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    Verify
                  </button>
                </form>
              )}
              {isLoading && (
                <button
                  type="button"
                  className="py-3 px-4 w-full mt-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#4DB547] text-white hover:bg-[#4DB547] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  <span
                    className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                    role="status"
                    aria-label="loading"
                  ></span>
                  Loading
                </button>
              )}
            </div>
          </div>
          <div className=" text-center">
            <p className="text-gray-500 dark:text-gray-100 relative mb-5 text-xs">
              ©{new Date().getFullYear()} peedi.in . Crafted with 💕 by &nbsp;
              <a href="https://www.wecypher.com/" target="_blank">
                wecypher
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
