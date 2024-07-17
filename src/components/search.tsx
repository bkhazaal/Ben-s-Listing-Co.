"use client";
import { useState } from "react";
import { api } from "~/trpc/react";
import { Input } from "./ui/input";

export default function SearchBar() {
  const [name, setName] = useState("");

  const searchBar = api.listing.searchUser.useMutation({
    onSuccess: () => {
      console.log("the searchbar works");
    },
  });
  const onSearch = ({ name }: { name: string }) => {
    searchBar.mutate({
      name,
    });
  };
  return (
    <div>
      <Input
        type="text"
        onChange={(e) => setName(e.target.value)}
        className="focus:outline-slate-300"
      />
    </div>
  );
}
