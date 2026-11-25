import { GetNotice, GetNoticeEvent, GetNoticeUpdate } from "@/_fetchs/GetNotice";
import CommonStyle from "../../_styles/pages.module.css";
import styles from "../../_styles/notice/notice_page.module.css";
import NoticeList from "@/_components/notice/NoticeList";

export default async function NoticePage(){
    /**
     * 전체 공지 데이터 가져오기
     * - 공지 목록 조회
     * - 업데이트 목록 조회
     * - 진행 중 이벤트 목록 조회
     */
    const NoticeData = await GetNotice();
    const NoticeUpdateData = await GetNoticeUpdate();
    const NoticeEventData = await GetNoticeEvent();

    return (
        <div className={CommonStyle.page_wrapper}>
            {
                NoticeData ? (
                    <NoticeList 
                        noticebox_Id="notice"
                        titleText="공지 목록"
                        noticeData={NoticeData.notice}
                    />
                ) : null
            }
            {
                NoticeUpdateData ? (
                    <NoticeList 
                        noticebox_Id="notice_update"
                        titleText="업데이트 목록"
                        noticeData={NoticeUpdateData.update_notice}
                    />
                ) : null
            }
            {
                NoticeEventData ? (
                    <NoticeList 
                        noticebox_Id="notice_event"
                        titleText="진행 중 이벤트 목록"
                        noticeData={NoticeEventData.event_notice}
                    />
                ) : null
            }
        </div>
    );
}