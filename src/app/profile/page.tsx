import { signIn, auth } from "@/auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default async function ProfilePage() {
  const session = await auth();

  if (session?.user) {
    redirect("/communities");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Community Hub</h1>
        <p className="text-lg mb-8 text-foreground/80">
          Sign in to discover and join amazing communities
        </p>
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/communities" });
          }}
        >
          <Button type="submit" size="lg" className="text-lg px-8">
            Sign in with Google
          </Button>
        </form>
      </div>
    </div>
  );
}
