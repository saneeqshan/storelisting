"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { LogOut } from "react-feather";

export default function LogoutAction() {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <a
      onClick={handleSignOut}
      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
      href="#"
    >
      <LogOut size={16}></LogOut>
      Logout
    </a>
  );
}
