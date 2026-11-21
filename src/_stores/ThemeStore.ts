//테마 변경 store

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface I_ThemeStore {
    NowTheme: string;
    setNowTheme: (value: string) => void;
};

export const ThemeStore = create<I_ThemeStore>()(
    persist((set) => ({
        NowTheme: "Light",
        setNowTheme: (value) => set({NowTheme: value})
    }), {
        name: "mapletodos-themestore",
        partialize: (currentState) => ({
          NowTheme: currentState.NowTheme  
        }),
        storage: createJSONStorage(() => localStorage)
    })
)