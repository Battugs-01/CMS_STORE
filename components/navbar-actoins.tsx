"use client";
import Button from "@/components/ui/button";
import useCard from "@/hooks/use-card";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const card = useCard();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-centere gap-x-4">
      <Button
        className="flex items-center rounded-full bg-black px-4 py-2"
        onClick={() => router.push("/card")}
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {card.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
