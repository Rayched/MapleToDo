
import styles from "../../_styles/mapletodos/mapletodospage.module.css";
import KeyManagement from "@/_components/mapletodos/KeyManagement";

export default function MapleToDosPage(){
    return (
        <div className={styles.mapletodos_page_wrapper}>
            <div className={styles.mapletodos_page_container}>
                <header>
                    <div id={styles.title_text}>
                        <img src={"/imgs/logo/icons.png"} />
                        <label>메할일 목록</label>
                    </div>
                    <div id={styles.guide_text}>
                        내 캐릭터의 메할일 조회
                    </div>
                </header>
                <main>
                    <KeyManagement />
                </main>
            </div>
        </div>
    );
}