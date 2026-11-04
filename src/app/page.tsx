
import styles from "../_styles/Root.module.css";
import Link from "next/link";

export default async function RootPage(){

    return (
        <div className={styles.root_page_wrapper}>
            <ul>
                <li>
                    <Link href={"/mapletodos"}>메할일 목록</Link>
                </li>
                <li>
                    <Link href={"/incomes"}>주간 수익</Link>
                </li>
            </ul>
        </div>
    );
};