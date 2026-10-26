"use client"

import { NowWidthStore } from "@/_stores/Stores";
import { useEffect } from "react";
import { useStore } from "zustand";

export default function ViewportListener(){
    const {setNowWidth} = useStore(NowWidthStore);

    useEffect(() => {
        const WidthResized = () => {
            setNowWidth(window.innerWidth);
        }

        WidthResized();
        window.addEventListener("resize", WidthResized);

        return () => {
            window.removeEventListener("resize", WidthResized);
        }
    }, []);

    return null;
}