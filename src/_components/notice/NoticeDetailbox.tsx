"use client";

import styled from "styled-components";
import { CloseIcon } from "../commons/Icons";
import { SetStateAction } from "react";
import { I_Notice, I_NoticeEvent } from "@/_fetchs/GetNotice";

interface I_NoticeDetailBox {
    setSelected: React.Dispatch<SetStateAction<string>>;
    titleText: string;
    noticedata: I_Notice[]|I_NoticeEvent[];
}

const Container = styled.div`
    width: 85dvw;
    max-width: 650px;
    height: 90dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text-color);
    background-color: var(--itembox-color);
    border-radius: 10px;
    overflow-x: hidden;
`;

const TitleBox = styled.h4`
    width: 100%;
    height: 8dvh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;

    button {
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 10px;
        right: 5px;
        background-color: transparent;
        border: 0px;
    }
`;

const NoticedataList = styled.ul`
    width: 100%;
    height: 80dvh;
    min-height: 80dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scrollbar-width: none;
`;

const NoticeDataItem = styled.li`
    width: 90%;
    min-height: 10dvh;
    margin: 3px 0px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: var(--item-color);

    a {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--text-color);
        text-decoration: none;
        font-weight: 550;
        
    };

    label {
        width: 100%;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: clamp(13px, 1vw, 15px);
    };

    span {
        width: 95%;
        height: 30%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        font-size: clamp(10px, 1vw, 13px);
    }
`;

export default function NoticeDetailBox({titleText, noticedata, setSelected}: I_NoticeDetailBox){
    const CloseBtnClicked = () => {
        setSelected("");
    };

    return (
        <Container>
            <TitleBox>
                {titleText}
                <button onClick={CloseBtnClicked}>
                    <CloseIcon 
                        w_value={20}
                        h_value={20}
                        icon_color="var(--text-color)"
                    />
                </button>
            </TitleBox>
            <NoticedataList>
                {
                    noticedata.map((data) => {
                        return (
                            <NoticeDataItem key={data.notice_id}>
                                <a href={data.url} target="_blank">
                                    <label>{data.title}</label>
                                    <span>작성일 {data.date.split("T")[0]} {data.date.split("T")[1]}</span>
                                </a>
                            </NoticeDataItem>
                        );
                    })
                }
            </NoticedataList>
        </Container>
    );
}