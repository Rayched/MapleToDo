"use client"

import styled from "styled-components";
import styles from "../../_styles/flexstyles.module.css"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { I_CharBookmarkdata } from "@/_datas/Fetches";
import { useStore } from "zustand";
import { BookmarkStore } from "@/_stores/BookmarkStore";
import ToDoItem from "./ToDoItem";
import { KeyStore } from "@/_stores/Stores";

interface I_FormValue {
    SearchWord: string;
};

interface I_EditButton {
    is_editmode: string;
};

interface I_ScheduleList {
    fetch_bookmarkdata?: I_CharBookmarkdata[];
};

const Wrapper = styled.div`
    width: 100%;
    height: 85dvh;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 98%;
    max-width: 500px;
    min-height: 300px;
    margin-top: 2%;
    background-color: lightgray;
    border-radius: 8px;
`;

const ScheduleListTitle = styled.div`
    width: 100%;
    height: 40%;
    max-height: 40px;
    color: white;
    background-color: black;
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;

    .title_area {
        width: 65%;
        height: 100%;
        padding-left: 5px;
        display: flex;
        align-items: center;
        font-weight: 500;
    };
    .edit_btn_area {
        width: 32%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    };
`;

const EditButton = styled.button<I_EditButton>`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.is_editmode === "true" ? "lightgray" : "black"};
    border: 2px solid lightgray;
    border-radius: 30px;

    svg {
        fill: ${(props) => props.is_editmode === "true" ? "rgb(50, 50, 50)" : "lightgray"};
    }

    &:hover {
        background-color: rgb(50, 50, 50);
        border-color: rgb(50, 50, 50);

        svg {
            fill: lightgray;
        }
    };
`;

const SearchbarContainer = styled.div`
    width: 100%;
    height: 50px;
    padding-bottom: 5px;
    background-color: black;
    align-items: center;
`;

const SearchBar = styled.form`
    width: 90%;
    height: 80%;
    max-width: 320px;
    margin-left: 2%;
    align-items: center;
    justify-content: center;
    background-color: black;
    border: 2px solid lightgray;
    border-radius: 10px;

    input {
        width: 80%;
        height: 80%;
        color: lightgray;
        background-color: black;
        border: 0px;
        font-weight: 700;
        &:focus {
            outline: none;
        };
    };
    button {
        width: 15%;
        height: 80%;
        background-color: black;
        border: 0px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    };
`;

const ScheduleListBox = styled.div`
    width: 100%;
    height: 80%;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        width: 0px;
    }
`;

export default function ScheduleList({fetch_bookmarkdata}: I_ScheduleList){
    const [EditMode, setEditMode] = useState(false);
    const {BookmarkDatas} = useStore(BookmarkStore);
    const {UsersKey} = useStore(KeyStore);

    const {register, handleSubmit} = useForm<I_FormValue>({
        defaultValues: {
            SearchWord: ""
        }
    });
    
    const router = useRouter();

    const EditBtnClicked = () => {
        if(EditMode){
            setEditMode(false);
        } else {
            setEditMode(true)
        }
    };

    const onValid = ({SearchWord}: I_FormValue) => {
        if(SearchWord === ""){
            return;
        } else {
            router.push(`/chartodos/${SearchWord}`)
        }
    };

    return (
        <Wrapper>
            <Container className={styles.flex_column}>
                <ScheduleListTitle className={styles.flex_row}>
                    <div className="title_area">
                        <span>캐릭터 목록</span>
                    </div>
                    <div className="edit_btn_area">
                        <EditButton is_editmode={EditMode ? "true" : "false"} onClick={EditBtnClicked}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={"20"} height={"20"}>
                                <path d="M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"/>
                            </svg>
                        </EditButton>
                    </div>
                </ScheduleListTitle>
                <SearchbarContainer className={styles.flex_row}>
                    <SearchBar className={styles.flex_row} onSubmit={handleSubmit(onValid)}>
                        <input 
                            type="text" 
                            placeholder="캐릭터 명을 입력해주세요."
                            autoComplete="off"
                            {...register("SearchWord")}
                        />
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="lightgray" width={"15"} height={"15"}>
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                            </svg>
                        </button>
                    </SearchBar>
                </SearchbarContainer>
                <ScheduleListBox className={styles.flex_column}>
                    {
                        BookmarkDatas.map((data, idx) => {
                            const GetScheduleData = fetch_bookmarkdata?.find((bookmarks) => bookmarks.charname === data.character_name);

                            if(!GetScheduleData){
                                return null;
                            } else {
                                return (
                                    <ToDoItem 
                                        key={`todoitem_${idx}`}
                                        charname={GetScheduleData.charname}
                                        isEditModes={EditMode}
                                        charimage={GetScheduleData.charimage}
                                        world_name={GetScheduleData.world_name}
                                        daily_contents={GetScheduleData.daily_contents}
                                        weekly_contents={GetScheduleData.weekly_contents}
                                        boss_contents={GetScheduleData.boss_contents}
                                        boss_clear_count={GetScheduleData.weekly_boss_clear_count}
                                    />
                                );
                            }
                        })
                    }
                </ScheduleListBox>
            </Container>
        </Wrapper>
    );
}