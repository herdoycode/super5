import { create } from "zustand";

interface LoginStore {
  status: "email" | "phone";
  toggleStatus: () => void;
}

export const useLoginStore = create<LoginStore>((set) => ({
  status: "phone",
  toggleStatus: () =>
    set((state) => ({ status: state.status === "phone" ? "email" : "phone" })),
}));
