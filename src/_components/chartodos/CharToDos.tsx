"use client"

import { I_CharacterBasicData, I_SchedulerData } from "@/_datas/Fetches";
import { useEffect, useState } from "react";
import styled from "styled-components"
import styles from "../../_styles/flexstyles.module.css";
import CharToDos_CharDataBox from "./Chartodos_Chardatabox";
import { ShowBossContents, ShowContents } from "./ShowSchedules";

interface I_CharToDos {
    character_ocid?: string;
    character_basic_data: I_CharacterBasicData;
    schedule_data: I_SchedulerData;
};

interface I_ScheduleCategoryBtn {
    button_id: string;
    now_category: string;
};

const Wrapper = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 450px;
    height: 100%;
    margin-top: 1%;
    align-items: center;
`;

const ScheduleDatasContainer = styled.div`
    width: 98%;
    height: 75%;
    margin-top: 5px;
    background-color: lightgray;
    border-radius: 5px;
`;

const ScheduleCategoryBar = styled.div`
    width: 100%;
    height: 10%;
    align-items: center;
    justify-content: space-between;
    color: white;
    background-color: black;
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;

    :nth-child(1){
        border-top-left-radius: inherit;
    };

    :nth-child(3){
        border-top-right-radius: inherit;
    }
`;

const ScheduleCategoryBtn = styled.button<I_ScheduleCategoryBtn>`
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.button_id === props.now_category ? "black" : "inherit"};
    background-color: ${(props) => props.button_id === props.now_category ? "lightgray" : "inherit"};
    border: 0px;
    font-size: 15px;
    font-weight: ${(props) => props.button_id === props.now_category ? "600" : "400"};
`;

const ScheduleDatas = styled.div`
    width: 100%;
    height: 90%;
    align-items: center;  
    overflow: hidden;
`;

export default function CharToDos({character_ocid, character_basic_data, schedule_data}: I_CharToDos){
    const [ShowAllSchedules, setShowAllSchdules] = useState(false);
    const [NowScheduleCategory, setNowScheduleCategory] = useState("daily_contents");

    const ScheduleCategoryBtnClicked = (button_id: string) => {
        if(button_id === ""){
            return;
        } else {
            setNowScheduleCategory(button_id);
        }
    };

    useEffect(() => {
        if(!character_ocid){
            return;
        } else {
            console.clear();
            console.log(`ocid: ${character_ocid}`);
            console.log(character_basic_data);
            console.log(schedule_data);
        }
    }, []);

    return (
        <Wrapper>
            <Container className={styles.flex_column}>
                <CharToDos_CharDataBox 
                    ocid={character_ocid}
                    character_name={character_basic_data.character_name}
                    character_class={character_basic_data.character_class}
                    character_level={character_basic_data.character_level}
                    character_exp_rate={character_basic_data.character_exp_rate}
                    world_name={character_basic_data.world_name}
                    character_image={character_basic_data.character_image}
                    show_all_schedules={ShowAllSchedules}
                    setStateFn={setShowAllSchdules}
                />
                <ScheduleDatasContainer className={styles.flex_column}>
                    <ScheduleCategoryBar className={styles.flex_row}>
                        <ScheduleCategoryBtn onClick={() => ScheduleCategoryBtnClicked("daily_contents")} button_id="daily_contents" now_category={NowScheduleCategory}>일일</ScheduleCategoryBtn>
                        <ScheduleCategoryBtn onClick={() => ScheduleCategoryBtnClicked("weekly_contents")} button_id="weekly_contents" now_category={NowScheduleCategory}>주간</ScheduleCategoryBtn>
                        <ScheduleCategoryBtn onClick={() => ScheduleCategoryBtnClicked("boss_contents")} button_id="boss_contents" now_category={NowScheduleCategory}>보스</ScheduleCategoryBtn>
                    </ScheduleCategoryBar>
                    <ScheduleDatas>
                        {
                            NowScheduleCategory === "daily_contents" ? (
                                <ShowContents 
                                    daily_contents_data={schedule_data.daily_contents}
                                    show_all_schedules={ShowAllSchedules}
                                />
                            ) : null
                        }
                        {
                            NowScheduleCategory === "weekly_contents" ? (
                                <ShowContents 
                                    weekly_contents_data={schedule_data.weekly_contents}
                                    show_all_schedules={ShowAllSchedules}
                                />
                            ) : null
                        }
                        {
                            NowScheduleCategory === "boss_contents" ? (
                                <ShowBossContents 
                                    boss_contents_data={schedule_data.boss_contents}
                                    show_all_schedules={ShowAllSchedules}
                                />
                            ) : null
                        }
                    </ScheduleDatas>
                </ScheduleDatasContainer>
            </Container>
        </Wrapper>
    );
}