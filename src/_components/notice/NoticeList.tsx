"use client"

import { I_Notice, I_NoticeEvent } from "@/_fetchs/GetNotice";
import styles from "../../_styles/notice/notice_page.module.css";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { PlusIcon } from "../commons/Icons";

interface I_NoticeListProps {
    noticeData?: I_Notice[];
    titleText: string;
    //Box 제목 텍스트
};

const ViewMoreNoticeBtn = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 2px;
    top: 3px;
`;

export default function NoticeList({noticeData, titleText}: I_NoticeListProps){
    const [ShowMores, setShowMores] = useState(false);
    //나머지 공지 더보기 여부
    /**
     * true 시 화면 정중앙에 팝업 형태로 render
     */

    return (
        <div className={styles.notice_list_box}>
            <h4 className={styles.notice_list_title}>
                {titleText}
                <ViewMoreNoticeBtn>
                    <PlusIcon 
                        w_value={20}
                        h_value={20}
                        icon_color={"var(--text-color)"}
                    />
                </ViewMoreNoticeBtn>
            </h4>
            <ul className={styles.notice_list}>
                {
                    noticeData ? (
                        noticeData.map((data, idx) => {
                            if(idx >= 4){
                                return null;
                            } else {
                                return (
                                    <a href={data.url} target="_blank" key={data.notice_id} className={styles.notice_item}>
                                        {data.title}
                                    </a>
                                );
                            }
                        })
                    ) : null
                }
            </ul>
        </div>
    );
}

/**
 * '/notice', page 내부에서
 * 공지, 업데이트, 진행 중 이벤트 목록 데이터들을
 * 화면에 출력할 때, 박스 명이나 출력하는 데이터 외에는
 * 기본 구성은 크게 다르지 않기에 만든 NoticeList Components
 */