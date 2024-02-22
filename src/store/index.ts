import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
const APP_NAME = `@${process.env.NEXT_PUBLIC_NAME?.replaceAll(
  " ",
  "_"
).toUpperCase()}`;

const useStore = create(
  persist(
    (set, get) => ({
      theme: "black",
      setTheme: (t: string) => {
        set({ theme: t });
      },
    }),
    {
      name: APP_NAME,
      skipHydration: true,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;
