import { create } from "zustand";

interface I_NowWidthStore {
    NowWidth: number;
    setNowWidth: (value: number) => void
}

interface I_SidebarStore {
    SidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;
}

/**
 * Now-Width Store
 * 사용자가 접속한 브라우저 Viewport width 값
 * 저장해두는 용도의 Zustand Store (Global State)
 */
export const NowWidthStore = create<I_NowWidthStore>((set) => ({
    NowWidth: 0,
    setNowWidth: (value) => set({NowWidth: value})
}));

/**
 * Sidebar Open/Close Store
 */

export const SidebarStore = create<I_SidebarStore>((set) => ({
    SidebarOpen: false,
    setSidebarOpen: (value) => set({SidebarOpen: value})
}));