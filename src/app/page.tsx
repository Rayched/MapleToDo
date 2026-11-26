
import Link from "next/link";
import styles from "../_styles/Root.module.css";

export default async function RootPage(){
    return (
        <div className={styles.rootpage_wrapper}>
            <Link href={"/chartodos"}>스케줄러</Link>
            <Link href={"/incomes"}>
                <img src={'/imgs/'} />
                <label>결정 수익</label>
            </Link>
            <Link href={"/notice"}>공지 목록</Link>
        </div>
    );
};