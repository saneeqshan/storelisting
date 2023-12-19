import AuthForm from "./components/auth/AuthForm";
import AuthSlider from "./components/auth/AuthSlider";
import { redirect } from "next/navigation";
import { isAuthenticated } from "./utility/auth";

export default async function Home() {
  // redirecting authenticated user to dashboard
  const authenticated = await isAuthenticated();
  if (authenticated) {
    redirect("/dashboard");
  }

  return (
    <main>
      <div className="container-fluid">
        <div className="h-screen md:overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 ">
            <AuthForm />
            <AuthSlider />
          </div>
        </div>
      </div>
    </main>
  );
}
