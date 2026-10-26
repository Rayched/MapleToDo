"use client"

import { NowWidthStore, SidebarStore } from "@/_stores/Stores";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import styled from "styled-components"
import { useStore } from "zustand";

const SidebarBtnContainer = styled.div`
    width: 50%;
    height: 100%;
    padding-right: 1%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: black;

    .button {
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const NavigationBarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    span {
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        cursor: pointer;
    }
`;

const SidebarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const SidebarWrapper = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);

    .non_sidebar_area {
        width: 65%;
        height: 100%;
    }
`;

const SidebarVersionMobile = styled(motion.div)`
    width: 40%;
    height: 96%;
    margin-top: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgray;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;

const SidebarVerMobile_Variants = {
    "init": {
        x: 10,
        opacity: 0
    },
    "animate": {
        x: 0,
        opacity: 35,
        transition: {
            duration: 0.3
        }
    },
    "exit": {
        x: 35,
        opacity: 0,
        transition: {
            duration: 0.2
        }
    }
};

//Sidebar Open Button (모바일 화면 전용)
export function SidebarOpenBtn(){
    const {setSidebarOpen} = useStore(SidebarStore);

    const SidebarBtnClicked = () => {
        setSidebarOpen(true);
    }

    return (
        <SidebarBtnContainer>
            <div className="button" onClick={SidebarBtnClicked}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="#ffffff">
                    <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
                </svg>
            </div>
        </SidebarBtnContainer>
    );
};

//Navigation Bar
export function NavigationBar(){
    const router = useRouter();

    const LinkClicked = (pathname: string) => {
        router.push(`/${pathname}`);
    };

    return (
        <NavigationBarContainer>
            <span onClick={() => LinkClicked("")}>메할일 목록</span>
            <span onClick={() => LinkClicked("incomes")}>주간 수익</span>
        </NavigationBarContainer>
    );
}

export default function Sidebar(){
    const {NowWidth} = useStore(NowWidthStore);
    const {SidebarOpen, setSidebarOpen} = useStore(SidebarStore);

    const CloseBtnClicked = () => {
        setSidebarOpen(false);
    }

    return (
        <SidebarContainer>
           {!SidebarOpen && NowWidth <= 520 ? <SidebarOpenBtn /> : null}
           {NowWidth > 520 ? <NavigationBar /> : null}
           <AnimatePresence>
           {
                SidebarOpen ? (
                    <SidebarWrapper>
                        <div className="non_sidebar_area" onClick={CloseBtnClicked}></div>
                        <SidebarVersionMobile variants={SidebarVerMobile_Variants} initial="init" animate="animate" exit={"exit"}>
                            
                        </SidebarVersionMobile>
                    </SidebarWrapper>
                ) : null
           }
           </AnimatePresence>
        </SidebarContainer>
    );
}