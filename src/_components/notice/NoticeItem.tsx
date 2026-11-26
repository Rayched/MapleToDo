"use client"

import { I_Notice, I_NoticeEvent } from "@/_fetchs/GetNotice";
import styled from "styled-components";
import { PlusIcon } from "../commons/Icons";
import { useRouter } from "next/navigation";
import { SetStateAction } from "react";

/**
 * api 통해 가져온 공지 데이터들을
 * 박스 형태로 모아서 보여주는 Components
 */

interface I_NoticeItemProps {
    noticebox_id: string;
    noticeData: I_Notice[]|I_NoticeEvent[];
    titleText: string; //Box 제목 텍스트
    setNowSelected: React.Dispatch<SetStateAction<string>>;
};

const NoticeItemContainer = styled.div`
    width: 95dvw;
    max-width: 735px;
    height: 40dvh;
    margin: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--text-color);
    background-color: var(--itembox-color);
    border-radius: 5px;
`;

const NoticeItemTitle = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: var(--text-color);
    border-color: var(--itembox-color);
    border-style: solid;
    border-bottom-width: 2px;
    font-weight: 600;
    font-size: 16px;
`;

const MoreNoticeBtn = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 3px;
    right: 2px;
    background-color: transparent;
    border: 0px;
`;

//공지 데이터 출력하는 box
const NoticeDataList = styled.div`
    width: 100%;
    height: 82%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NoticeDataItem = styled.a`
    width: 90%;
    height: 16%;
    margin: 5px 0px;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--text-color);
    background-color: var(--item-color);
    text-decoration: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: clamp(13px, 1vw, 15px);
    font-weight: 550;

    &:hover {
        scale: 1.01;
    };
`;

export default function NoticeItem({noticebox_id, noticeData, titleText, setNowSelected}: I_NoticeItemProps){
    const MoreBtnClicked = () => {
        setNowSelected(noticebox_id);
    };
    return (
        <NoticeItemContainer>
            <NoticeItemTitle>
                {titleText}
                <MoreNoticeBtn onClick={MoreBtnClicked}>
                    <PlusIcon 
                        w_value={20}
                        h_value={20}
                        icon_color={"var(--text-color)"}
                    />
                </MoreNoticeBtn>
            </NoticeItemTitle>
            <NoticeDataList>
                {
                    noticeData.map((data, idx) => {
                        if(idx >= 4){
                            return null;
                        }

                        return (
                            <NoticeDataItem key={data.notice_id} href={data.url} target="_blank">
                                {data.title}
                            </NoticeDataItem>
                        );
                    })
                }
            </NoticeDataList>
        </NoticeItemContainer>
    );
}