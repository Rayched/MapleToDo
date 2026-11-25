/**
 * 프로젝트 전체에서
 * 공통으로 사용되는 svg icon 모음
 */

interface I_IconProps {
    w_value: number;
    h_value: number;
    icon_color: string;
}

//Light Theme Icon
export function LightThemeIcon({w_value, h_value, icon_color}: I_IconProps){
return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={w_value} height={h_value} fill={icon_color}>
        <path d="M288-32c8.4 0 16.3 4.4 20.6 11.7L364.1 72.3 468.9 46c8.2-2 16.9 .4 22.8 6.3S500 67 498 75.1l-26.3 104.7 92.7 55.5c7.2 4.3 11.7 12.2 11.7 20.6s-4.4 16.3-11.7 20.6L471.7 332.1 498 436.8c2 8.2-.4 16.9-6.3 22.8S477 468 468.9 466l-104.7-26.3-55.5 92.7c-4.3 7.2-12.2 11.7-20.6 11.7s-16.3-4.4-20.6-11.7L211.9 439.7 107.2 466c-8.2 2-16.8-.4-22.8-6.3S76 445 78 436.8l26.2-104.7-92.6-55.5C4.4 272.2 0 264.4 0 256s4.4-16.3 11.7-20.6L104.3 179.9 78 75.1c-2-8.2 .3-16.8 6.3-22.8S99 44 107.2 46l104.7 26.2 55.5-92.6 1.8-2.6c4.5-5.7 11.4-9.1 18.8-9.1zm0 144a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm0 240a96 96 0 1 1 0-192 96 96 0 1 1 0 192z" />
    </svg>
);
}

//Dark Theme Icon
export function DarkThemeIcon({w_value, h_value, icon_color}: I_IconProps){
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512" 
            width={w_value} 
            height={h_value} 
            fill={icon_color}
        >
            <path d="M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"/>
        </svg>
    );
}

//Sidebar Open Button Icon
export function SidebarIcon({w_value, h_value, icon_color}: I_IconProps){
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512"
            width={w_value}
            height={h_value}
            fill={icon_color}
        >
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
        </svg>
    );
}

//Plus Icon
/**
 * 사용처
 * - <NoticeList /> ('/notice' page 전용, 공지 목록 출력용)
 */

export function PlusIcon({w_value, h_value, icon_color}: I_IconProps){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={w_value} height={h_value} fill={icon_color}>
            <path d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"/>
        </svg>
    );
}