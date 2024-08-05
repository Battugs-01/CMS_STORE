import { create } from "zustand";
import { Product } from "@/types";

interface PreviewModalState {
  isOpen: boolean;
  data?: Product | null;
  onOpen: (product: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalState>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data) => set({ isOpen: true, data: data }),
  onClose: () => set({ isOpen: false, data: null }),
}));

export default usePreviewModal;
