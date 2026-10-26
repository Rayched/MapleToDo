"use client"

import React from "react";
import styled from "styled-components"
import styles from "../../_styles/flexstyles.module.css";
import { extraDatas } from "@/_datas/extraData";
import { useStore } from "zustand";
import { NowWidthStore } from "@/_stores/Stores";
import { BookmarkStore } from "@/_stores/BookmarkStore";

interface I_CharToDos_CharDataBox {
    ocid?: string;
    character_name?: string;
    character_class?: string;
    character_level?: number;
    character_exp_rate?: string;
    world_name?: string;
    character_image?: string;
    show_all_schedules: boolean;
    setStateFn: React.Dispatch<React.SetStateAction<boolean>>;
};

interface I_UtilButton {
    params: string;
};

const Container = styled.div`
    width: 98%;
    height: 25%;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: lightgray;
    border-radius: 5px;
`;

const CharImageContainer = styled.div`
    width: 30%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
    }
`;

const CharDataContainer = styled.div`
    width: 70%;
    height: 90%;
    align-items: center;

    .chardata_item {
        display: flex;
        flex-direction: row;
        
    };
`;

const CharDataItem = styled.div`
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 30%;
    font-size: 15px;
    font-weight: 500;

    img {
        width: 15px;
        height: 15px;
        margin-right: 2px;
    }

    #namedata {
        width: 50%;
        height: 80%;
        align-items: center;
    };

    #classdata {
        width: 50%;
        height: 80%;
        align-items: center;        
    };

    #leveldata {
        width: 90%;
        height: 80%;
        align-items: center;
    };

    #bookmarkBtn {
        margin-right: 3%;
    };
`;

const UtilButton = styled.div<I_UtilButton>`
    width: 43%;
    height: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-radius: 5px;
    color: ${(props) => props.params === "true" ? "rgb(241, 242, 246)" : "black"};
    background-color: ${(props) => props.params === "true" ? "rgb(47, 53, 66)" : "rgb(241, 242, 246)"};
    border-color: ${(props) => props.params === "true" ? "rgb(241, 242, 246)" : "black"};

    svg {
        margin-right: 2px;
    }
`;

export default function CharToDos_CharDataBox({
    ocid, character_name, character_class, character_level, character_exp_rate, character_image, world_name,
    show_all_schedules, setStateFn
}: I_CharToDos_CharDataBox){
    /**
     * 2026.09.28 23:27
     * 
     * 캐릭터 이미지 및 데이터 배치
     * 이미지는 그대로 사용하되
     * 캐릭터 데이터들은 임시로 만든 것이기에
     * 수정할 필요 있음.
     * 
     * 서버 아이콘 출력을 위한 서버 data
     * 직업군 아이콘 출력을 위한 직업 data
     * 일일 및 주간 컨텐츠 data
     * 보스 컨텐츠 data
     * 이하 4개의 data 복구 먼저 진행
     */
    const {NowWidth} = useStore(NowWidthStore);
    const {BookmarkDatas, AddNewBookmark, DeleteBookmark} = useStore(BookmarkStore);

    const GetJobData = extraDatas.class_datas.find((classdata) => classdata.class_fullname === character_class);
    const GetWorldData = extraDatas.world_datas.find((worlddata) => worlddata.world_name === world_name);
    const BookmarkCheck = BookmarkDatas.find((data) => data.character_name === character_name);

    //스케줄 버튼 (등록항목/전체항목) 클릭 event listener
    const ScheduleBtnClicked = () => {
        if(show_all_schedules){
            setStateFn(false)
        } else {
            setStateFn(true)
        }
    };

    //북마크 버튼 클릭 event listener
    const BookmarkBtnClicked = () => {
        if(!character_name){
            return; 
        } else if(!BookmarkCheck){
            AddNewBookmark({character_name: character_name})
        } else {
            DeleteBookmark(character_name);
        }
    };

    return (
        <Container>
            <CharImageContainer>
                <img src={character_image} />
            </CharImageContainer>
            <CharDataContainer className={styles.flex_column}>
                <CharDataItem className={styles.flex_row} key="name_classdatabox">
                    <span id="namedata" className={styles.flex_row}>
                        <img src={`/imgs/worlds/${world_name}.png`} />
                        {character_name}
                    </span>
                    <span id="classdata" className={styles.flex_row}>
                        {GetJobData ? <img src={`/imgs/job_icons/${GetJobData.class_category}.png`} /> : null}
                        {NowWidth >= 450 && character_class}
                        {NowWidth < 450 && GetJobData ? GetJobData.class_littlename : null}
                    </span>
                </CharDataItem>
                <CharDataItem className={styles.flex_row} key="level_exp_rate_box">
                    <span id="leveldata" className={styles.flex_row}>
                        {`LV.${character_level} (${character_exp_rate}%)`}
                    </span>
                </CharDataItem>
                <CharDataItem className={styles.flex_row} key="util_buttons_box">
                    <UtilButton id="bookmarkBtn" params={BookmarkCheck ? "true" : "false"} onClick={BookmarkBtnClicked}>
                        <label>{BookmarkCheck ? "★ 북마크 해제" : "☆ 북마크 등록"}</label>
                    </UtilButton>
                    <UtilButton params={show_all_schedules ? "true" : "false"} onClick={ScheduleBtnClicked}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="15" viewBox="0 0 512 512" fill={show_all_schedules ? "white" : "black"}>
                            <path d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"/>
                        </svg>
                        <label>{show_all_schedules ? "등록 항목" : "전체 항목"}</label>
                    </UtilButton>
                </CharDataItem>
            </CharDataContainer>
        </Container>
    );
}