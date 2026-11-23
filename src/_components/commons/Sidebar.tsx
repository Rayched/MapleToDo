"use client"

import styled from "styled-components";
import { SidebarIcon } from "./Icons";
import { useStore } from "zustand";
import { ThemeStore } from "@/_stores/ThemeStore";
import { useState } from "react";
import { ThemeButton_mobile } from "./ThemeBtn";
import { PathData } from "./desktop_navs";
import { usePathname, useRouter } from "next/navigation";

//Sidebar open button container
const SidebarButton = styled.div``;

const SidebarWrapper = styled.div`
    width: 100dvw;
    height: 100dvh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);

    .empty_area {
        width: 60dvw;
        height: 100dvh;
        max-width: 380px;
    }
`;

const SidebarContainer = styled.div`
    width: 40dvw;
    height: 95dvh;
    max-width: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: var(--bg-color);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;

const PathItemListBox = styled.div`
    width: 90%;
    height: 30%;
    max-height: 355px;
    margin-top: 8%;
    margin-bottom: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
        width: 90%;
        height: 10%;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: var(--text-color);
        font-weight: bold;
        font-size: clamp(16px, 1vw, 18px);
    }

    .pathitemlist {
        width: 90%;
        height: 80%;
        margin-top: 3%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .pathitem {
            width: 95%;
            height: 20%;
            margin: 5px 0px;
            padding-left: 3px;
            display: flex;
            flex-direction: row;
            align-items: center;
            border-radius: 5px;
        }
    }
`;

const PathmatchItem = styled.li`
    font-weight: 600;
    background-color: var(--item-color);
`;

export default function Sidebar(){
    const {NowTheme} = useStore(ThemeStore);
    const [Hide, setHide] = useState(true);
    const nowPathname = usePathname();
    const router = useRouter();

    //Sidebar Open Btn Click event listener
    const SidebarOpen = () => {
        setHide(false);
    };
    
    //Sidebar Close
    //사이드바 외, 다른 영역 클릭 시 실행
    const SidebarClose = () => {
        setHide(true);
    };

    //PathItem Click Event Listener
    const PathItemClicked = ({pathvalue}: {pathvalue: string}) => {
        //pathvalue 미지정한 경우 방지용
        if(pathvalue === "") return;

        /**
         * 사이드바 Render 여부를 정하는
         * 'Hide' state가 true일 때면
         * 사이드바가 Render가 안돼야 함
         * 다만 만약의 경우를 방지하기 위해서
         * 해당 early return 문을 추가함
         */
        if(Hide) return;
        setHide(true); //사이드바 닫기

        setTimeout(() => {
            router.push(pathvalue);
        }, 100);
    };
    
    return (
        <>
            <SidebarButton onClick={SidebarOpen}>
                <SidebarIcon 
                    w_value={28}
                    h_value={28}
                    icon_color={NowTheme === "Dark" ? "white" : "black"}
                />
            </SidebarButton>
            {
                !Hide ? (
                    <SidebarWrapper>
                        <div className="empty_area" onClick={SidebarClose}></div>
                        <SidebarContainer>
                            <PathItemListBox>
                                <label>바로가기 목록</label>           
                                <ul className="pathitemlist">
                                    {
                                        PathData.map((data) => {
                                            if(data.pathvalue === nowPathname || nowPathname.includes(data.pathvalue)){
                                                return (
                                                    <PathmatchItem key={data.pathvalue} className="pathitem">
                                                        {`${data.pathname}`}
                                                    </PathmatchItem>
                                                );
                                            } else {
                                                return (
                                                    <li 
                                                        key={data.pathvalue} 
                                                        className="pathitem" 
                                                        onClick={() => PathItemClicked({pathvalue: data.pathvalue})}
                                                    >
                                                        {data.pathname}
                                                    </li>
                                                );
                                            }
                                        })
                                    }
                                </ul>
                            </PathItemListBox>
                            <ThemeButton_mobile />
                        </SidebarContainer>
                    </SidebarWrapper>
                ) : null
            }
        </>
    );
}