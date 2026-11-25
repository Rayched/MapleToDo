/**
 * 인게임 공지 (업데이트 내역, 이벤트 포함)
 * api 통해 가져오는 GetNotice 함수
 */

import { headers } from "next/headers";

/**
 * I_Notice
 * => 공지 및 업데이트 목록 조회 시
 * return되는 값의 type
 * 
 * I_NoticeEvent
 * => I_Notice Type의 데이터에 'date_event_start(end)'라는
 * data가 추가된 형태, 공지 및 업데이트 목록 조회 return 값에는
 * 없는 data이기 때문에 I_Notice를 상속해서 별도 정의하였음
 */
export interface I_Notice {
    title: string;
    url: string;
    notice_id: number;
    date: string;
};

export interface I_NoticeEvent extends I_Notice {
    date_event_start: string;
    date_event_end: string;
};

//공지사항 목록 조회 api return type
interface I_GetNotice {
    notice: I_Notice[];
};

//업데이트 목록 조회 api return type
interface I_GetNoticeUpdate {
    update_notice: I_Notice[];
}

//진행 중 이벤트 목록 조회 api return type
interface I_GetNoticeEvent {
    event_notice: I_NoticeEvent[];
}

const Keys = process.env.NEXON_API_KEY;
const defaultURL = "https://open.api.nexon.com/maplestory/v1";

//공지사항 목록 보기 api fetch function
export async function GetNotice(): Promise<I_GetNotice>{
    if(!Keys){
        throw new Error("API Key를 확인해주세요.");
    }

    const NoticeInfo = await fetch(
        defaultURL + "/notice",
        {
            headers: {
                'x-nxopen-api-key': Keys,
                'accept': 'application/json'
            }
        }
    );

    const Resp = await NoticeInfo.json();

    if(!NoticeInfo.ok){
        console.error("공지 목록 조회 요청 실패: ", {
            status: NoticeInfo.status,
            response: Resp
        })
        throw new Error("공지 목록을 불러오지 못했습니다.")
    }

    return Resp;
}

//업데이트 내역 조회 api fetch function
export async function GetNoticeUpdate(): Promise<I_GetNoticeUpdate>{
    if(!Keys){
        throw new Error("API Key를 확인해주새요.")
    }

    const noticeUpdateInfos = await fetch(
        defaultURL + "/notice-update",
        {
            headers: {
                'x-nxopen-api-key': Keys,
                'accept': 'application/json'
            }
        }
    );

    const resp = await noticeUpdateInfos.json();

    if(!noticeUpdateInfos.ok){
        console.error("업데이트 내역 조회 실패: ", {
            status: noticeUpdateInfos.status,
            response: resp
        })
    };

    return resp;
}

//진행 중 이벤트 내역 조회 fetch function
export async function GetNoticeEvent(): Promise<I_GetNoticeEvent>{
    if(!Keys){
        throw new Error("이벤트 내역 조회 실패")
    }

    const notice_eventdata = await fetch(
        defaultURL + "/notice-event",
        {
            headers: {
                'x-nxopen-api-key': Keys,
                'accept': 'application/json'
            }
        }
    );

    const resp = await notice_eventdata.json();

    if(!notice_eventdata.ok){
        console.error("진행 중 이벤트 내역 조회 실패: ", {
            status: notice_eventdata.status,
            response: resp
        })
    };

    return resp;
}
