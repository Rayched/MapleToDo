"use client"

import styled from "styled-components";
import { SidebarIcon } from "./Icons";
import { useStore } from "zustand";
import { ThemeStore } from "@/_stores/ThemeStore";
import { useState } from "react";
import { ThemeButton_mobile } from "./ThemeBtn";

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
    height: 98dvh;
    max-width: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: var(--item-color);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export default function Sidebar(){
    const {NowTheme} = useStore(ThemeStore);
    const [Hide, setHide] = useState(true);

    const SidebarOpen = () => {
        setHide(false);
    };

    const SidebarClose = () => {
        setHide(true);
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
                            <div className="quick_link_list">
                                <div>스케줄러</div>
                                <div>결정 수익</div>
                            </div>
                            <ThemeButton_mobile />
                        </SidebarContainer>
                    </SidebarWrapper>
                ) : null
            }
        </>
    );
}