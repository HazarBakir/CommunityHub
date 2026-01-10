import { signIn, signOut, auth } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function Profile() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <Button type="submit">Sign in with Google</Button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user.name || user.email}!</h1>
        <p className="mb-2">You are signed in with Google.</p>
        <p className="text-sm text-gray-500 mb-8">Email: {user.email}</p>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button type="submit">Log out</Button>
        </form>
      </div>
    );
  }
}
