"use client";

import { ThemeStore } from "@/_stores/ThemeStore";
import styled from "styled-components";
import { useStore } from "zustand";
import { DarkThemeIcon, LightThemeIcon } from "./Icons";
import {motion} from "framer-motion";
import { setCookie } from "cookies-next/client";

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

    .themebtn {
        width: 90%;
        height: 40%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        color: var(--bg-color);
        background-color: var(--text-color);
        border: 3px solid var(--text-color);
        border-radius: 5px;
    };

    span {
        width: 45%;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: clamp(17px, 2vw, 19px);
    }
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
            <div className="themebtn" onClick={ThemebtnClicked}>
                {
                    NowTheme === "Light" ? (
                        <DarkThemeIcon 
                            w_value={35}
                            h_value={35}
                            icon_color="white"
                        />
                    ) : (
                        <LightThemeIcon 
                            w_value={35}
                            h_value={35}
                            icon_color="black"
                        />
                    )
                }
                <span>{NowTheme === "Dark" ? "Light" : "Dark"}</span>
            </div>
        </MobileBtn_Container>
    );
}