import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { Database } from "@/lib/database.types";
import {
  SignInWithPasswordlessCredentials,
  VerifyOtpParams,
} from "@supabase/supabase-js";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const id = String(formData.get("id"));
  const otp = String(formData.get("otp"));
  const type = String(formData.get("type"));
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient<Database>({
    cookies: () => cookieStore,
  });
  let payload: VerifyOtpParams;

  if (type === "sms") {
    payload = {
      token: otp,
      phone: "+91" + id,
      type: "sms",
    };
  } else {
    payload = {
      email: id,
      token: otp,
      type: "email",
    };
  }

  await supabase.auth.verifyOtp(payload);

  return NextResponse.redirect(requestUrl.origin + "/dashboard", {
    status: 301,
  });
}
