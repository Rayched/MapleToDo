"use client";
import Link from "next/link";
import styles from "../../_styles/Root.module.css";
import { ThemeButton } from "./ThemeBtn";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";

type PathDataType = {
    pathvalue: string;
    pathname: string;
};

const PathData: PathDataType[] = [
    {pathvalue: "/chartodos", pathname: "스케줄러"},
    {pathvalue: "/incomes", pathname: "결정 수익"},
    {pathvalue: "/notice", pathname: "공지 목록"}
];

const PathMatchItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 6dvh;
    max-height: 55px;
    margin: 0px 5px;
    font-weight: 600;
    font-size: clamp(15px, 1vw, 17px);
    border-radius: 5px;
    background-color: var(--item-color);
`;

export default function Navs_Desktop(){
    const pathnames = usePathname();

    useEffect(() => {
        console.log(pathnames)
    }, [pathnames]);

    return (
        <div className={styles.nav_desktop}>
            {
                PathData.map((data) => {
                    if(data.pathvalue === pathnames || pathnames.includes(data.pathvalue)){
                        return (
                            <PathMatchItem key={data.pathvalue}>{data.pathname}</PathMatchItem>
                        );
                    } else {
                        return (
                            <Link 
                                key={data.pathvalue}
                                href={data.pathvalue} 
                                className={styles.pathitem}
                            >{data.pathname}</Link>
                        );
                    };
                })
            }
            <ThemeButton />
        </div>
    );
}