import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const supabase = createServerComponentClient<Database>({
  cookies,
});

export const isAuthenticated = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session?.user.id ?? false;
};

export const isOnboarded = async () => {
  const user = await supabase.auth.getUser();
  const userId = user.data.user?.id;

  if (!userId) return false;

  const { data, error } = await supabase
    .from("bussiness")
    .select("is_onboarded")
    .eq("id", userId)
    .single();

  return data?.is_onboarded ?? false;
};
