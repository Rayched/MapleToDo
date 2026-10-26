//API Fetch 함수 모음

//Ocid Type
type OcidType = {
    ocid?: string;
};

//캐릭터 기본 정보 조회 api 조회값 type
export interface I_CharacterBasicData {
    access_flag?: string;
    character_class?: string;
    character_class_level?: string;
    character_date_create?: string;
    character_exp?: number;
    character_exp_rate?: string;
    character_gender?: string;
    character_guild_name?: string;
    character_image?: string;
    character_level?: number;
    character_name?: string;
    date?: null|string;
    liberation_quest_clear?: string;
    world_name?: string;
};

//스케줄러 api 조회 값 개별 타입's
//일일 및 주간 컨텐츠
export interface I_Contents {
    content_name: string;
    max_count: number;
    now_count: number;
    quest_state: string|null;
    registration_flag: string;
    type: string;
    /**
     * contents_name: 콘텐츠/퀘스트명
     * type: 타입 (contents/quest)
     * registration_flag: 스케줄러 등록 여부 (true/false)
     * now_count: 현재 완료 횟수/점수
     * max_count: 최대 완료 가능 횟수/점수
     * quest_state: 퀘스트인 경우 진행 상태 
        ("0": 기타, "1": 진행중, "2": 완료)
     */
};

//보스 컨텐츠 (일일, 주간, 월간)
export interface I_BossContents {
    content_name: string;
    cycle: string;
    difficulty: string;
    list_order_no: number;
    registration_flag: string;
    complete_flag: string;
    /**
     * complete_flag: 보스명
     * content_name: 보스 난이도
     * cycle: 보스 초기화 주기
     * difficulty: 리스트 순서
     * list_order_no: 리스트 순서
     * registration_flag: 스케줄러 등록 여부 (true/false)
     * complite_flag: 완료 여부 (true/false)
     */
};

//스케줄러 api 조회값 Type
export interface I_SchedulerData {
    character_name?: string;
    character_level?: number;
    character_class?: string;
    world_name?: string;
    weekly_boss_clear_count?: number;
    weekly_boss_clear_limit_count?: number;
    date?: string;
    daily_contents?: I_Contents[];
    weekly_contents?: I_Contents[];
    boss_contents?: I_BossContents[];
};

export interface I_CharBookmarkdata {
    charname: string;
    charclass: string;
    charimage: string;
    world_name: string;
    daily_contents: I_Contents[];
    weekly_contents: I_Contents[];
    boss_contents: I_BossContents[];
    weekly_boss_clear_count: number;
};

//API 공통 URL 값 및 api key import
const BasedURL = "https://open.api.nexon.com/maplestory/v1";
const Keys = process.env.NEXON_API_KEY;

const headers = {
    "x-nxopen-api-key": `${Keys}`
};

//Ocid (캐릭터 고유 Id) fetch function
export async function OcidFetches(charname: string) {
    const APIURL = BasedURL + `/id?character_name=${charname}`;

    const Resp = await fetch(APIURL, {headers});

    if(!Resp.ok){
        return null;
    }

    const Json = await Resp.json() as OcidType;
    return Json;
};

//캐릭터 기본 정보 fetch function
export async function CharbasicDataFetches(ocids?: string) {
    const CharBasicURL = BasedURL + `/character/basic?ocid=${ocids}`

    const Resp = await fetch(
        CharBasicURL, {headers}
    );

    if(!Resp.ok){
        return null
    }

    const CharBasicData = await Resp.json() as I_CharacterBasicData

    return CharBasicData;
};

//스케줄러 정보 조회 fetch function
export async function SchedulerDataFetches(ocid?: string) {
    const APIURL = BasedURL + `/scheduler/character-state?ocid=${ocid}`;

    const Resp = await fetch(APIURL, {headers});

    if(!Resp.ok) return null;

    const scheduleData = await Resp.json() as I_SchedulerData;

    return scheduleData;
}

//ocid - 캐릭터 기본 정보 - 스케줄러 데이터 조회 fetch function
/**
 * cookie data 기반으로 북마크 등록된 캐릭터 데이터 조회
 */
export async function BookmarkCharDataFetchs(charnames: string[]){
    if(charnames.length === 0){
        return [];
    };

    //cookie로 저장된 캐릭터 북마크 별 ocid 조회
    const Ocids = (await Promise.all(
        charnames.map(
            async(value) => {
                const resp = await OcidFetches(value);
                return resp?.ocid;
            }
        )
    )).filter((ocid) => ocid !== undefined);

    //Ocid 조회 실패 시
    if(Ocids.length === 0){
        console.log(`ocid 조회에 실패했습니다.\n(조회 캐릭터 목록: ${charnames.join(", ")})`);
        return [];
    }

    //ocid 조회 성공 시
    /**
     * 캐릭터 북마크 별
     * '캐릭터 기본 정보, 스케줄러 정보 조회'
     */
    const [BasicData, scheduleData] = await Promise.all([
        //캐릭터 기본 정보 조회
        Promise.all(
            Ocids.map(async(ocid) => {
                const resp = await CharbasicDataFetches(ocid);
                return resp;
            })
        ),
        Promise.all(
            Ocids.map(async(ocid) => {
                const resp = await SchedulerDataFetches(ocid);
                return resp
            })
        )
    ]);

    //조회한 데이터 변환 작업
    const CharBookmarkData = BasicData.map((basics, idx) => {
        //특정 캐릭터 스케줄러 정보 가져오기
        const CharScheduleData = scheduleData[idx];

        if(!basics || !CharScheduleData){
            return null;
        }

        return {
            charname: basics.character_name,
            charclass: basics.character_class,
            charimage: basics.character_image,
            world_name: basics.world_name,
            daily_contents: CharScheduleData.daily_contents,
            weekly_contents: CharScheduleData.weekly_contents,
            boss_contents: CharScheduleData.boss_contents,
            weekly_boss_clear_count: CharScheduleData.weekly_boss_clear_count
        } as I_CharBookmarkdata;
    }).filter((data) => data !== null);

    return CharBookmarkData;
}