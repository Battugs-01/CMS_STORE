import { create } from "zustand";
import { Product } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";
interface CardStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (data: Product) => void;
  removeAll: (data: Product) => void;
}

const useCard = create(
  persist<CardStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast("Item already in cart");
        }

        set({ items: [...get().items, data] });
        toast.success("Item added to cart");
      },
      removeItem: (data: Product) => {
        const currentItems = get().items;
        const newItems = currentItems.filter((item) => item.id !== data.id);
        set({ items: newItems });
        toast.success("Item removed from cart");
      },
      removeAll: () => {
        set({ items: [] });
        toast.success("All items removed from cart");
      },
    }),
    {
      name: "card-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCard;
