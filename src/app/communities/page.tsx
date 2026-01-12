import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { CommunityCard } from "@/components/ui/community-card";
import Image from "next/image";

const mockCommunities = [
  {
    id: 1,
    title: "Web Developers Hub",
    description:
      "A community for web developers to share knowledge, discuss trends, and collaborate on projects.",
    memberCount: 12450,
  },
  {
    id: 2,
    title: "Design Enthusiasts",
    description:
      "Connect with designers, share your work, get feedback, and discover the latest design trends.",
    memberCount: 8320,
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    description:
      "Explore artificial intelligence, machine learning algorithms, and cutting-edge AI applications.",
    memberCount: 15680,
  },
  {
    id: 4,
    title: "Startup Founders",
    description:
      "Network with fellow entrepreneurs, share startup stories, and get advice on building your business.",
    memberCount: 6540,
  },
  {
    id: 5,
    title: "Open Source Contributors",
    description:
      "Collaborate on open source projects, find maintainers, and contribute to the community.",
    memberCount: 9870,
  },
  {
    id: 6,
    title: "Gaming Community",
    description:
      "Discuss your favorite games, find teammates, share gaming moments, and stay updated on releases.",
    memberCount: 22100,
  },
];

export default async function CommunitiesPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/profile");
  }

  const userName = session.user.name || session.user.email || "User";
  const userImage = session.user.image || undefined;

  return (
    <main className="min-h-screen bg-background">
      <header className="w-full bg-background border-b-4 border-border px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold">Community Hub</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm">Welcome, {userName}</span>
            {userImage && (
              <Image
                src={userImage}
                alt={userName}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-border"
                referrerPolicy="no-referrer"
                unoptimized
              />
            )}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">Discover Communities</h2>
          <p className="text-lg text-foreground/80">
            Join communities that match your interests and connect with like-minded people
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCommunities.map(({ id, title, description, memberCount }) => (
            <CommunityCard
              key={id}
              title={title}
              description={description}
              memberCount={memberCount}
            />
          ))}
        </div>
      </div>
    </main>
  );
}