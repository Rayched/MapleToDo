"use client"

import styled from "styled-components";
import flexstyles from "../../_styles/flexstyles.module.css";
import { I_Contents } from "@/_datas/Fetches";
import { useStore } from "zustand";
import { NowWidthStore } from "@/_stores/Stores";
import { ContentsRefData } from "@/_datas/ContentsData";

interface I_BasedDesign_ScheduleItem {
    isdones: string;
    children: React.ReactNode;
};

interface I_ScheduleItem_BossContents {
    
};

const BasedDesign_Container = styled.div<{isdone: string}>`
    width: 95%;
    height: 10%;
    min-height: 50px;
    margin: 1% 0px;
    align-items: center;
    background-color: ${(props) => props.isdone === "true" ? "rgb(189, 195, 199)" : "white"};
    border: 2px solid ${(props) => props.isdone === "true" ? "white" : "rgb(189, 195, 199)"};
    border-radius: 5px;

    #commons_area {
        width: 10%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    };

    .checkbox {
        width: 13px;
        height: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid black;
        border-radius: 3px;
    }

    #children_area {
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: clamp(14px, 1vw, 16px);
        font-weight: 550;

        .contents_name_area {
            width: 90%;
            height: 100%;
            display: flex;
            align-items: center;
            text-decoration: ${(props) => props.isdone === "true" ? "line-through" : "none"};
            text-decoration-thickness: 1.2px;
        }

        .contents_count_area {
            width: 10%;
            height: 100%;
            padding-right: 3%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
    }
`;

function BasedDesign_ScheduleItem({isdones, children}: I_BasedDesign_ScheduleItem){
    return (
        <BasedDesign_Container className={flexstyles.flex_row} isdone={isdones}>
            <div id="commons_area">
                <div className="checkbox">
                    {
                        isdones === "true" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={"14"} height={"14"}>
                                <path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/>
                            </svg>
                        ) : null
                    }
                </div>
            </div>
            <div id="children_area">{children}</div>
        </BasedDesign_Container>
    );
}

export function ScheduleItem({schedule_data}: {schedule_data: I_Contents}){
    const {NowWidth} = useStore(NowWidthStore);
    const contentsdata = ContentsRefData;
    
    if(schedule_data.type === "quest"){
        const QuestStates = schedule_data.quest_state === "2" ? "true" : "false"
        const RefData = contentsdata.find((refs) => refs.contentsName === schedule_data.content_name);
        if(!RefData){
            //'ContentsData.ts'에서 동일한 contents_name 데이터를 못찾은 경우
            /**
             * ContentsData.ts => viewport-width가 520px 이하일때
             * 간략화한 contents_name (=> little_name) 출력하기 위한 용도
             */
            return (
                <BasedDesign_ScheduleItem isdones={QuestStates}>
                    <div className="contents_name_area">
                        {`${schedule_data.content_name}_refdata_error`}
                    </div>
                </BasedDesign_ScheduleItem>
            );
        } else if(RefData.contentsId === "monster_park" || RefData.contentsId === "arcane_weekly_quest"){
            //익몬, 여로 주간퀘 필터링용
            const QuestStates = schedule_data.now_count === RefData.max_count || schedule_data.quest_state === "2" ? "true" : "false";
            return (
                <BasedDesign_ScheduleItem isdones={QuestStates}>
                    <div className="contents_name_area">
                        {NowWidth <= 520 ? RefData.little_name : schedule_data.content_name}
                    </div>
                    <div className="contents_count_area">
                        {
                            schedule_data.quest_state === "2" ? `${RefData.max_count}/${RefData.max_count}` : `${schedule_data.now_count}/${RefData.max_count}`
                        }
                    </div>
                </BasedDesign_ScheduleItem>
            );
        } else if(RefData.cycles === "daily"){
            //심볼 일퀘 필터링용
            return (
                <BasedDesign_ScheduleItem isdones={QuestStates}>
                    <div className="contents_name_area">
                        {NowWidth <= 520 ? RefData.little_name : schedule_data.content_name}
                    </div>
                    <div className="contents_count_area">
                        {
                            schedule_data.quest_state === "2" ? `완료` : `${schedule_data.now_count}/${RefData.max_count}`
                        }
                    </div>
                </BasedDesign_ScheduleItem>
            );
        } else {
            return (
                <BasedDesign_ScheduleItem isdones={QuestStates}>
                    <div className="contents_name_area">
                        {NowWidth <= 520 ? RefData.little_name : schedule_data.content_name}
                    </div>
                </BasedDesign_ScheduleItem>
            );
        }
    } else if(schedule_data.type === "contents"){
        const RefData = ContentsRefData.find((refs) => refs.contentsName === schedule_data.content_name);

        if(!RefData){
            return (
                <BasedDesign_ScheduleItem isdones="false">
                    {`${schedule_data.content_name}_refdata_error`}
                </BasedDesign_ScheduleItem>
            );
        } else if(schedule_data.content_name === "몬스터파크"){
            //일일_몬스터파크 필터링
            const QuestState = schedule_data.now_count === RefData.max_count ? "true" : "false";

            return (
                <BasedDesign_ScheduleItem isdones={QuestState}>
                    <div className="contents_name_area">
                        {schedule_data.content_name}
                    </div>
                    <div className="contents_count_area">
                        {`${schedule_data.now_count}/${RefData.max_count}`}
                    </div>
                </BasedDesign_ScheduleItem>
            );
        } else if(schedule_data.content_name.includes("[길드]")){
            const QuestState = schedule_data.now_count !== 0 ? "true" : "false";

            return (
                <BasedDesign_ScheduleItem isdones={QuestState}>
                    <div className="contents_name_area">
                        {schedule_data.content_name}
                    </div>
                    <div className="contents_count_area">
                        {`${schedule_data.now_count}`}
                    </div>
                </BasedDesign_ScheduleItem>
            );
        } 
        else {
            const QuestState = schedule_data.now_count === RefData.max_count ? "true" : "false";

            return (
                <BasedDesign_ScheduleItem isdones={QuestState}>
                    <div className="contents_name_area">
                        {schedule_data.content_name}
                    </div>
                    <div className="contents_count_area">
                        {`${schedule_data.now_count}/${RefData.max_count}`}
                    </div>
                </BasedDesign_ScheduleItem>
            );
        }
    }
};

export function ScheduleItem_BossContents(){
    return (
        <div></div>
    );
}