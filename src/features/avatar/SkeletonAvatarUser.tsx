import { Skeleton } from "@/shared/ui/skeleton/skeleton";

export function SkeletonAvatar() {
  return (
    <div className="flex w-fit items-center gap-4">
      <Skeleton className="size-10 shrink-0 rounded-full" />
      <div className="grid gap-2">
        <Skeleton className="h-4 w-25" />
        <Skeleton className="h-4 w-25" />
      </div>
    </div>
  );
}
