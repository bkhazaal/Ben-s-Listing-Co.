"use client";

import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { Button } from "./ui/button";

export default function DeleteButton({ id }: { id: number }) {
  const router = useRouter();

  const deleteListing = api.listing.delete.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });
  const onDelete = () => {
    deleteListing.mutate({
      id,
    });
  };
  return (
    <Button onClick={onDelete} variant={"ghost"} className="mr-5 p-2">
      <Trash></Trash>
    </Button>
  );
}
