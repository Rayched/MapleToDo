import ScheduleList from "@/_components/home/ScheduleList";
import { cookies } from "next/headers";
import styles from "../_styles/Root.module.css";
import { BookmarkCharDataFetchs, OcidFetches } from "@/_datas/Fetches";

export default async function RootPage(){
    const CookieStore = await cookies();
    const BookmarkCookies = CookieStore.get("mapletodos_bookmarks");

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