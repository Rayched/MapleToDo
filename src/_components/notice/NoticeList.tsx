"use client"

import { I_Notice, I_NoticeEvent } from "@/_fetchs/GetNotice";
import styles from "../../_styles/notice/notice_page.module.css";
import styled from "styled-components";
import { CloseIcon, PlusIcon } from "../commons/Icons";
import NoticeItem from "./NoticeItem";
import { useEffect, useState } from "react";
import NoticeDetailBox from "./NoticeDetailbox";

interface I_NoticeListProps {
    noticeData: I_Notice[];
    updateData: I_Notice[];
    eventData: I_NoticeEvent[];
};

const NoticeListContainer = styled.div`
    width: 100dvw;
    min-height: 85dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const NoticeDetailWrapper = styled.div`
    width: 100dvw;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
`;

const NoticeDetailContainer = styled.div`
    width: 75dvw;
    max-width: 700px;
    height: 90dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text-color);
    background-color: var(--itembox-color);
    border-radius: 10px;

    .titlebox {
        width: 100%;
        height: 8dvh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;
    }
`;

export default function NoticeList({noticeData, updateData, eventData}: I_NoticeListProps){
    const [NowSelected, setNowSelected] = useState("");

    useEffect(() => {
        if(NowSelected === "") return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        }
    }, [NowSelected]);

    return (
        <NoticeListContainer>
            <NoticeItem 
                key="notice"
                noticebox_id="notice"
                noticeData={noticeData}
                setNowSelected={setNowSelected}
                titleText="공지 목록"
            />
            <NoticeItem 
                key="notice_update"
                noticebox_id="notice_update"
                noticeData={updateData}
                setNowSelected={setNowSelected}
                titleText="업데이트 목록"
            />
            <NoticeItem 
                key="notice_event"
                noticebox_id="notice_event"
                noticeData={eventData}
                setNowSelected={setNowSelected}
                titleText="진행 중 이벤트 목록"
            />
            {
                /**
                 * 공지 목록 box '+' 버튼 클릭시 render
                 */
                NowSelected === "notice" ? (
                    <NoticeDetailWrapper>
                        <NoticeDetailBox 
                            titleText="공지 목록"
                            noticedata={noticeData}
                            setSelected={setNowSelected}
                        />
                    </NoticeDetailWrapper>
                ) : null
            }
            {
                /**
                 * 업데이트 목록 '+' 버튼 클릭 시 render
                 */
                NowSelected === "notice_update" ? (
                    <NoticeDetailWrapper>
                        <NoticeDetailBox 
                            titleText="업데이트 목록"
                            setSelected={setNowSelected}
                            noticedata={updateData}
                        />
                    </NoticeDetailWrapper>
                ) : null
            }
            {
                /**
                 * 이벤트 목록 '+' 버튼 클릭 시 render
                 */
                NowSelected === "notice_event" ? (
                    <NoticeDetailWrapper>
                        <NoticeDetailBox 
                            titleText="진행 중 이벤트 목록"
                            setSelected={setNowSelected}
                            noticedata={eventData}
                        />
                    </NoticeDetailWrapper>
                ) : null
            }
        </NoticeListContainer>
    );
}

/**
 * '/notice', page 내부에서
 * 공지, 업데이트, 진행 중 이벤트 목록 데이터들을
 * 화면에 출력할 때, 박스 명이나 출력하는 데이터 외에는
 * 기본 구성은 크게 다르지 않기에 만든 NoticeList Components
 */