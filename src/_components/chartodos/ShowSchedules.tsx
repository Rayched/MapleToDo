"use client"

import { I_BossContents, I_Contents } from "@/_datas/Fetches";
import styled from "styled-components";
import styles from "../../_styles/flexstyles.module.css"
import { ScheduleItem } from "./ScheduleItems";

interface I_ShowContents {
    daily_contents_data?: I_Contents[];
    weekly_contents_data?: I_Contents[];
    show_all_schedules: boolean;
};

interface I_ShowBossContents {
    boss_contents_data?: I_BossContents[];
    show_all_schedules: boolean;
};

const ShowContents_Wrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 320px;
    max-height: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        width: 0px;
    }
`;

const ShowContents_Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ShowBoasContents_Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export function ShowContents({daily_contents_data, weekly_contents_data, show_all_schedules}: I_ShowContents){
    return (
        <ShowContents_Wrapper>
            {
                daily_contents_data ? (
                    <ShowContents_Container>
                        {
                            show_all_schedules === true ? (
                                daily_contents_data.map((data, idx) => {
                                    return (
                                        <ScheduleItem key={`dailys${idx}`} schedule_data={data} />
                                    );
                                })
                            ) : (
                                daily_contents_data.map((data, idx) => {
                                    if(data.registration_flag === "false") return null;

                                    return (
                                        <ScheduleItem key={`dailys${idx}`} schedule_data={data} />
                                    );
                                })
                            )
                        }
                    </ShowContents_Container>       
                ) : null
            }
            {
                weekly_contents_data ? (
                    <ShowContents_Container>
                        {
                            show_all_schedules ? (
                                weekly_contents_data.map((data, idx) => {
                                    return (
                                        <ScheduleItem key={`weeklys_${idx}`} schedule_data={data} />
                                    );
                                })
                            ) : (
                                weekly_contents_data.map((data, idx) => {
                                    if(data.registration_flag === "false") return null;
                                    return (
                                        <ScheduleItem key={`weeklys_${idx}`} schedule_data={data} />
                                    );
                                })
                            )
                        }
                    </ShowContents_Container>
                ) : null
            }
        </ShowContents_Wrapper>
    );
}

export function ShowBossContents({boss_contents_data, show_all_schedules}: I_ShowBossContents){
    
    return (
        <ShowBoasContents_Wrapper>
            {
                boss_contents_data ? (
                    boss_contents_data.map((data) => {
                        return (
                            <li key={`${data.content_name}_${data.difficulty}`}>{data.content_name}</li>
                        );
                    })
                ) : null
            }
        </ShowBoasContents_Wrapper>
    );
}