import { create } from "zustand";
import { persist } from "zustand/middleware";

interface I_NowWidthStore {
    NowWidth: number;
    setNowWidth: (value: number) => void
}

interface I_SidebarStore {
    SidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;
};

type UsersKeyType = {
    Id: string;
    Value: string;
};

interface I_KeyStore {
    UsersKey: UsersKeyType;
    AddUsersKey: (newValue: string) => void;
    DeleteUsersKey: () => void;
};

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

export const KeyStore = create<I_KeyStore>()(
    persist((set) => ({
        UsersKey: {Id: "", Value: ""},
        AddUsersKey: (newValue) => set((state) => {
            const IdText = crypto.randomUUID();
            console.log(IdText);

            if(IdText === ""){
                return {
                    UsersKey: state.UsersKey
                }
            } else {
                return {
                    UsersKey: {Id: IdText, Value: newValue}
                }
            }
        }),
        DeleteUsersKey: () => set({
            UsersKey: {Id: "", Value: ""}
        })
        
    }), {
        name: "mapletodo_key_store"
    })
);