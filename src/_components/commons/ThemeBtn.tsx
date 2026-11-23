"use client";

import { ThemeStore } from "@/_stores/ThemeStore";
import styled from "styled-components";
import { useStore } from "zustand";
import { DarkThemeIcon, LightThemeIcon } from "./Icons";
import {motion} from "framer-motion";
import { setCookie } from "cookies-next/client";

interface I_ThemeBtnIconBox {
    now_theme: string; //현재 테마
    btn_name: string; 
    /**
     * 버튼 명
     * Light Theme Button => Light
     * Dark Theme Button => Dark
     */
}

const Buttons = styled.div`
    width: 30px;
    height: 30px;
    padding: 3px;
    margin-right: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: var(--itembox-color);
    border-radius: 50px;
    background-color: var(--item-color);
`;

const MobileBtn_Container = styled.div`
    width: 90%;
    max-width: 235px;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid var(--text-color);
    border-radius: 5px;

    label {
        width: 100%;
        height: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: clamp(17px, 2vw, 19px);
    };
`;

const ThemeBtnVersionM = styled.div`
    width: 80%;
    height: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 3px solid var(--text-color);
    border-radius: 5px;

    :nth-child(1){
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    };
    :nth-child(2){
        border-left-width: 2px;
        border-style: solid;
        border-color: var(--text-color);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    };
`;

const ThemeBtnIconBox = styled.div<I_ThemeBtnIconBox>`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.now_theme === props.btn_name ? `var(--item-color)` : `var(--bg-color)`};
`;

export function ThemeButton(){
    const {NowTheme, setNowTheme} = useStore(ThemeStore);

    const ThemebtnClicked = () => {
        if(NowTheme === "Light"){
            setNowTheme("Dark");
            setCookie("mapletodos_theme_cookie", "Dark", {maxAge: 60 * 60 * 24 * 30});
            document.documentElement.setAttribute("data-theme", "Dark");
        } else {
            setNowTheme("Light")
            setCookie("mapletodos_theme_cookie", "Light", {maxAge: 60 * 60 * 24 * 30});
            document.documentElement.setAttribute("data-theme", "Light");
        }
    };

    return (
        <Buttons onClick={ThemebtnClicked}>
            {
                NowTheme === "Light" ? (
                    <LightThemeIcon 
                        w_value={25}
                        h_value={25}
                        icon_color={"black"}
                    />
                ) : null
            }
            {
                NowTheme === "Dark" ? (
                    <DarkThemeIcon 
                        w_value={25}
                        h_value={25}
                        icon_color="white"
                    />
                ) : null
            }
        </Buttons>
    );
}

export function ThemeButton_mobile(){
    const {NowTheme, setNowTheme} = useStore(ThemeStore);

    const ThemebtnClicked = () => {
        if(NowTheme === "Light"){
            setNowTheme("Dark");
            setCookie("mapletodos_theme_cookie", "Dark", {maxAge: 60 * 60 * 24 * 30});
            document.documentElement.setAttribute("data-theme", "Dark");
        } else {
            setNowTheme("Light")
            setCookie("mapletodos_theme_cookie", "Light", {maxAge: 60 * 60 * 24 * 30});
            document.documentElement.setAttribute("data-theme", "Light");
        }
    };

    return (
        <MobileBtn_Container>
            <label>테마 변경</label>
            <ThemeBtnVersionM onClick={ThemebtnClicked}>
                <ThemeBtnIconBox now_theme={NowTheme} btn_name="Light">
                    <LightThemeIcon 
                        w_value={25}
                        h_value={25}
                        icon_color="var(--text-color)"
                    />
                </ThemeBtnIconBox>
                <ThemeBtnIconBox now_theme={NowTheme} btn_name="Dark">
                    <DarkThemeIcon 
                        w_value={25}
                        h_value={25}
                        icon_color="var(--text-color)"
                    />
                </ThemeBtnIconBox>
            </ThemeBtnVersionM>
        </MobileBtn_Container>
    );
}