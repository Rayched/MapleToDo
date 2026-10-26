"use client"

import { I_BossContents, I_CharBookmarkdata, I_Contents } from "@/_datas/Fetches";
import styled from "styled-components";
import styles from "../../_styles/flexstyles.module.css";
import { useEffect } from "react";
import { useStore } from "zustand";
import { BookmarkStore } from "@/_stores/BookmarkStore";
import { useRouter } from "next/navigation";

interface I_ToDoItem {
    charname: string;
    isEditModes: boolean;
    charimage: string;
    daily_contents: I_Contents[];
    weekly_contents: I_Contents[];
    boss_contents: I_BossContents[];
    boss_clear_count: number;
    world_name: string;
};
 
interface I_Editbutton {
    bg_color: string;
};

const Wrapper = styled.div`
    width: 95%;
    height: 45%;
    min-height: 140px;
    margin: 2% 0px;
    background-color: white;
    border-radius: 8px;
    align-items: center;
    justify-content: center;

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    };

    &:hover {
        background-color: rgb(245, 245, 245);
        border: 2px solid black;
    }
`;

const Charimagebox = styled.div`
    width: 30%;
    height: 70%;
    min-width: 125px;
    min-height: 130px;
    max-width: 135px;
    max-height: 140px;
    margin: 0px 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgray;
    border-radius: 5px;

    .charimage {
        width: 85%;
        height: 80%;
        z-index: 1;
    }

    .charnames {
        width: 85%;
        height: 15%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .worldicon {
            width: 15px;
            height: 15px;
            margin-right: 3px;
        }

        label {
            font-size: 14px;
            font-weight: 550;
        }
    };
`;

const ScheduleListBox = styled.div`
    width: 70%;
    height: 100%;

    .todoitem_editbar {
        width: 100%;
        height: 13%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        background-color: black;
        border-top-right-radius: 8px;
    };
`;

const Editbutton = styled.button<I_Editbutton>`
    width: 20px;
    height: 20px;
    margin: 0px 3px;
    border: 0px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.bg_color};
`;

export default function ToDoItem({
    charname, charimage, world_name, daily_contents, weekly_contents, boss_contents, isEditModes, boss_clear_count
}: I_ToDoItem){    
    const {DeleteBookmark} = useStore(BookmarkStore);
    const router = useRouter();

    const Redirect_Charpage = () => {
        if(isEditModes){
            return;
        } else {
            router.push(`/chartodos/${charname}`);
        }
    };

    return (
        <Wrapper className={styles.flex_row}>
            <div className="container" onClick={Redirect_Charpage}>
                <Charimagebox>
                    <img src={charimage} className="charimage" />
                    <div className="charnames">
                        <img className="worldicon" src={`/imgs/worlds/${world_name}.png`} />
                        <label>{charname}</label>
                    </div>
                </Charimagebox>
                <ScheduleListBox className={styles.flex_column}>
                    {
                        isEditModes ? (
                            <div className="todoitem_editbar">
                                <Editbutton bg_color="white">▲</Editbutton>
                                <Editbutton bg_color="white">▼</Editbutton>
                                <Editbutton bg_color="rgb(255, 121, 121)" onClick={() => DeleteBookmark(charname)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 384 512">
                                        <path fill="white" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/>
                                    </svg>
                                </Editbutton>
                            </div>
                        ) : null
                    }
                </ScheduleListBox>
            </div>         
        </Wrapper>
    );
}