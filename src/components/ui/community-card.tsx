import { cn } from "@/lib/utils";
import { Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "./button";

interface CommunityCardProps {
  title: string;
  description: string;
  memberCount: number;
  className?: string;
}

export function CommunityCard({
  title,
  description,
  memberCount,
  className,
}: CommunityCardProps) {
  const formatMemberCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div
      className={cn(
        "rounded-base flex flex-col shadow-shadow border-4 border-border bg-secondary-background text-foreground font-base p-6 gap-4 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all cursor-pointer",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-2xl font-heading leading-tight flex-1">{title}</h3>
        <Badge className="text-base py-1 px-3">
          <Users size={26} strokeWidth={2.25} />
          {formatMemberCount(memberCount)}
        </Badge>
      </div>

      <p className="text-sm font-base leading-relaxed text-foreground/90 flex-1">
        {description}
      </p>

      <div className="flex items-center justify-end pt-2 border-t-2 border-border gap-2">
        <Button size="sm" className="px-4 py-1 text-sm">
          Follow
        </Button>
        <Button size="sm" variant="neutral" className="px-4 py-1 text-sm">
          View
        </Button>
      </div>
    </div>
  );
}
