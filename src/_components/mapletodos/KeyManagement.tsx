"use client"

import { KeyStore } from "@/_stores/Stores";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useStore } from "zustand";
import styles from "../../_styles/flexstyles.module.css";
import UsersKeyItem from "./UsersKeyItem";

/**
 * 사용자가 추가한 Nexon Open API Key를
 * localstorage에 저장 및 관리하는  Components
 */

interface I_FormValue {
    inputvalues: string;
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Noto-Sans", "Noto-Sans-Kr";
`;

const KeyForms = styled.form`
    width: 60%;
    max-width: 400px;
    height: 12%;
    margin-top: 5%;
    border: 3px solid black;
    border-radius: 8px;
    text-align: center;
    align-items: center;
    justify-content: space-between;
`;

const KeyInputs = styled.input`
    width: 85%;
    height: 90%;
    border: 0px;
    border-radius: inherit;
    text-align: center;
    &:focus {
        outline: none;
    }
`;

const SubmitButton = styled.button`
    width: 10%;
    height: 70%;
    margin-right: 1%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;
    border: 0px;

    &:hover {
        svg {
            background-color: #dedddd;
        };
    };
`;

const ErrorMessage = styled.div`
    width: 60%;
    max-width: 400px;
    height: 10%;
    align-items: center;
    justify-content: center;
    color: red;
`;

const UserAddsKeyContainer = styled.div`
    width: 60%;
    max-width: 400px;
    height: 35%;
    margin-top: 2%;
    align-items: center;
    border: 3px solid lightgray;
    border-radius: 5px;
    background-color: lightgray;

    #container_titles {
        width: 100%;
        height: 40%;
        padding-left: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: bold;
    };
`;

export default function KeyManagement(){
    const {UsersKey, AddUsersKey} = useStore(KeyStore);
    const {
        register, 
        handleSubmit, 
        formState: {errors}, 
        setValue,
    } = useForm<I_FormValue>({
        defaultValues: {
            inputvalues: ""
        }
    });

    const onValid = ({inputvalues}: I_FormValue) => {
        AddUsersKey(inputvalues);
        setValue("inputvalues", "")
    };

    return (
        <Container>
            <KeyForms className={styles.flex_row} onSubmit={handleSubmit(onValid)}>
                <KeyInputs 
                    type="text"
                    placeholder="Nexon Open API Key를 입력해주세요."
                    autoComplete="off"
                    {...register("inputvalues", {
                        required: {
                            value: true,
                            message: "Nexon API Key를 입력하지 않았습니다."
                        },
                        minLength: {
                            value: 100,
                            message: "'live_'로 시작하는 api key를 입력해주세요."
                        },
                        pattern: {
                            value: /^(?:live_)[A-Za-z0-9]{96}$/,
                            message: "api key is not defined"
                        },
                    })}
                />
                <SubmitButton>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={"25px"} height={"25px"}>
                        <path fill="rgb(0, 0, 0)" d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
                    </svg>
                </SubmitButton>
            </KeyForms>
            {
                errors.inputvalues ? (
                    <ErrorMessage className={styles.flex_row}>{errors.inputvalues.message}</ErrorMessage>
                ) : null
            }
            {
                UsersKey.Value !== "" ? (
                    <UserAddsKeyContainer className={styles.flex_column}>
                        <div id="container_titles">등록된 API Key</div>
                        <UsersKeyItem />
                    </UserAddsKeyContainer>
                ) : null
            }
        </Container>
    );
}