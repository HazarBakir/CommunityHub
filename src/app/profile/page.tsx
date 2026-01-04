import { signIn, auth } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function SignIn() {
  const session = await auth();
  console.log(session);
  const user = session?.user;
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
}
