import ScheduleList from "@/_components/home/ScheduleList";
import { cookies } from "next/headers";
import styles from "../../../_styles/Root.module.css";
import { BookmarkCharDataFetchs, } from "@/_datas/Fetches";

export default async function ChartodosPage(){
    const CookieStore = await cookies();
    const BookmarkCookies = CookieStore.get("mapletodos_bookmarks");

    /**
     * 스케줄러 정보 조회 api는 내 계정 내의 캐릭터만 조회 가능하다
     * 즉, 다른 사람의 캐릭터의 스케줄러 정보는 조회를 못한다는 말이고
     * 다른 사용자들이 이 기능을 사용하려면
     * 별도로 사용자가 api key를 입력하는 ui가 필요하다
     * 
     */
    if(BookmarkCookies){
        const Bookmarknames = JSON.parse(BookmarkCookies.value);
        console.log(Bookmarknames);

        const GetSchedules = await BookmarkCharDataFetchs(Bookmarknames);

        if(GetSchedules){
            console.clear();
            console.log(GetSchedules);
        }

        return (
            <div className={styles.root_page_wrapper}>
                <ScheduleList 
                    fetch_bookmarkdata={GetSchedules}
                />
            </div>
        );
    } else {
        return (
            <div className={styles.root_page_wrapper}>
                Fetch Failed
            </div>
        );
    }
};