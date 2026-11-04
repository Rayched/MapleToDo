"use client"

import styled from "styled-components";
import styles from "../../_styles/flexstyles.module.css";
import { useStore } from "zustand";
import { KeyStore } from "@/_stores/Stores";

const Container = styled.div`
    width: 100%;
    max-width: 390px;
    height: 40%;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-radius: 5px;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.1);

    .keyicon {
        width: 10%;
        height: 70%;
        margin-left: 1%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: lightgray;
        border-radius: 40px;
    };

    .keyvalue {
        width: 68%;
        height: 70%;
        padding-left: 5px;
        display: flex;
        align-items: center;
        background-color: lightgray;
        font-size: clamp("14px", 1vw, "16px");
        font-weight: 580;
        border-radius: 5px;
    };

    .delete_button {
        width: 10%;
        height: 70%;
        margin-right: 1%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: inherit;
        border: 0px;
        border-radius: 40px;

        &:hover {
            svg {
                fill: rgb(238, 82, 83);
            };
        }
    };

    &:hover {
        background-color:rgb(236, 240, 241);
    }
`;

export default function UsersKeyItem(){
    const {UsersKey, DeleteUsersKey} = useStore(KeyStore);

    const DeleteButtonClicked = () => {
        const confirm = window.confirm("API Key를 삭제 하시겠습니까?");

        if(confirm){
            DeleteUsersKey();
        } else {
            return;
        }
    };

    return (
        <Container className={styles.flex_row}>
            <div className="keyicon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={"20px"} height={"20px"}>
                    <path fill="rgb(47, 54, 64)" d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"/>
                </svg>
            </div>
            <div className="keyvalue">
                {`${UsersKey.Value.slice(0, 9)}****...`}
            </div>
            <button className="delete_button" onClick={DeleteButtonClicked}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(47, 54, 64)" viewBox="0 0 448 512" width={"20px"} height={"20px"}>
                    <path d="M166.2-16c-13.3 0-25.3 8.3-30 20.8L120 48 24 48C10.7 48 0 58.7 0 72S10.7 96 24 96l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-96 0-16.2-43.2C307.1-7.7 295.2-16 281.8-16L166.2-16zM32 144l0 304c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-304-48 0 0 304c0 8.8-7.2 16-16 16L96 464c-8.8 0-16-7.2-16-16l0-304-48 0zm160 72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176zm112 0c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-176z"/>
                </svg>
            </button>
        </Container>
    );
}