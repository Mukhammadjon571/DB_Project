import { create } from "zustand";
import UseGenerator from "../generators/useGenerator";

const authStore = create((set) => ({
  isLogged: false,
  token: null,
  login: async ({ username, password }) => {
    set((state) => {});
  },
}));

const useAuthStore = UseGenerator(authStore);
export default useAuthStore;
