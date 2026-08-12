import { cookies } from "next/headers";
import BookmarkList from "./_components/BookmarkList";
import styles from "./_styles/chartodos.module.css";
import { GetBookmarksSchduleData, GetCharScheduleData, GetOcids } from "@/game_datas/Fetchs";
import CookieErrorBox from "@/components/commons/CookieErrorBox";
import { getCookie } from "cookies-next/server";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";

export default async function Chartodos_page(){
    const CookieStore = await cookies();
    const Charnames = CookieStore.get("mapletodos_bookmarknames")?.value;

    if(Charnames){
        const Test = JSON.parse(decodeURIComponent(Charnames));
        const GetScheduleDatas = await GetBookmarksSchduleData(Test);

        return (
            <div className={styles.chartodos_page_wrapper}>
                <BookmarkList 
                    AllScheduleData={GetScheduleDatas}
                />
            </div>
        );
        
    } else {
        return (
            <div className={styles.chartodos_page_wrapper}>
                <h4>쿠키 데이터를 가져오지 못했습니다.</h4>
            </div>
        );
    }

    
}