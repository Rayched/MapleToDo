import { getCookie, setCookie } from "cookies-next/client";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface I_Bookmarkdata {
    character_name: string;
    //quick_schedules: any;
};

interface I_BookmarkStore {
    BookmarkDatas: I_Bookmarkdata[];
    AddNewBookmark: (newdata: I_Bookmarkdata) => void;
    DeleteBookmark: (targetname: string) => void;
};

/**
 * 이전 버전, 북마크 데이터에
 * 캐릭터 레벨, 직업, 서버 등
 * 상세 데이터도 저장했었음.
 * 
 * 북마크 데이터를 localstorage에 저장하고
 * 북마크 등록된 캐릭터들의 데이터를 참고해서
 * 서버 컴포넌트에서 api 호출하는 짓이
 * 불가능 했기에 저런 방법을 사용하였음.
 * 
 * 다만 cookie에 캐릭터 기본 데이터를 저장해두면
 * 북마크 등록된 캐릭터 정보를 가져올 수 있음
 * (서버 단에서도 참고 가능한 데이터)
 * 
 * Nexon open api/maplestory 안내문에 따르면
 * 'ocid'는 게임 콘텐츠 변경으로 바뀔 수도 있다고 한다.
 * 즉, 완전한 고정 값은 아니라는 소리로 봐도 무방할 것 같다.
 * 그러므로 북마크를 추가할 때 ocid는 추가하지 않는 쪽으로
 * 변경하였다. (2026.09.30 작성)
 */

export const BookmarkStore = create<I_BookmarkStore>()(
    persist((set) => ({
        BookmarkDatas: [] as I_Bookmarkdata[],
        AddNewBookmark: (newData) => set((prev) => {
            const CookieStore = getCookie("mapletodos_bookmarks");
            const CookieBookmarks: string[] = CookieStore ? JSON.parse(CookieStore) : [];

            const isDefines = CookieBookmarks.includes(newData.character_name);

            if(isDefines){
                return prev;
            } else {
                CookieBookmarks.push(newData.character_name);
                setCookie(
                    "mapletodos_bookmarks",
                    JSON.stringify(CookieBookmarks),
                    {
                        path: "/",
                        maxAge: 60 * 60 * 24 * 30
                    }
                )

                return {
                    BookmarkDatas: [...prev.BookmarkDatas, newData]
                }
            }
        }),
        DeleteBookmark: (targetname) => set((prev) => {
            const CookieStore = getCookie("mapletodos_bookmarks");
            const Charnames: string[] = CookieStore ? JSON.parse(CookieStore) : [];

            const isDefines = Charnames.includes(targetname);

            if(!isDefines){
                const Filters = prev.BookmarkDatas.filter((data) => data.character_name !== targetname);

                return {
                    BookmarkDatas: Filters
                }
            } else {
                const Filters = prev.BookmarkDatas.filter((data) => data.character_name !== targetname);
                const CharnameFilters = Charnames.filter((value) => value !== targetname);

                setCookie(
                    "mapletodos_bookmarks",
                    JSON.stringify(CharnameFilters),
                    {
                        path: "/",
                        maxAge: 60 * 60 * 24 * 30
                    }
                );

                return {
                    BookmarkDatas: Filters
                }
            }
        })
    }), {
        name: "mapletodo-bookmarks",
        partialize: (state) => ({
            BookmarkDatas: state.BookmarkDatas
        })
    })
);