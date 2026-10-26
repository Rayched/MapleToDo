/**
 * ContentsData (일일 및 주간 컨텐츠)
 * BossContentsData (보스 컨텐츠)
 * 
 * 이하 두 데이터 외의 기타 데이터
 * - 월드 아이콘 참고용 데이터
 * - 직업군 아이콘 참고용 데이터
 * - 보스 난이도 관련 데이터 (색상 등)
 */

interface I_WorldData {
    world_id: string;
    world_name: string;
};

interface I_ClassData {
    class_category: string;
    class_fullname: string;
    class_littlename: string;
}

const WorldDatas: I_WorldData[] = [
    //(구) 리부트 서버들
    {world_id: "world01", world_name: "헬리오스"},
    {world_id: "world02", world_name: "에오스"},
    //본 서버
    {world_id: "world03", world_name: "오로라"},
    {world_id: "world04", world_name: "레드"},
    {world_id: "world05", world_name: "이노시스"},
    {world_id: "world06", world_name: "유니온"},
    {world_id: "world07", world_name: "스카니아"},
    {world_id: "world08", world_name: "루나"},
    {world_id: "world09", world_name: "제니스"},
    {world_id: "world10", world_name: "크로아"},
    {world_id: "world11", world_name: "베라"},
    {world_id: "world12", world_name: "엘리시움"},
    {world_id: "world13", world_name: "아케인"},
    {world_id: "world14", world_name: "유니온"},
    //이벤트 서버 (챌린저스 서버)
    {world_id: "events", world_name: "챌린저스"},
    {world_id: "events", world_name: "챌린저스 2"},
    {world_id: "events", world_name: "챌린저스 3"},
    {world_id: "events", world_name: "챌린저스 4"},
];

const JobCategories: string[] = ["warrior", "magician", "bowman", "thief", "pirate", "hybrid"];
const ClassDatas: I_ClassData[] = [
    //모험가-시그너스-레지(데몬 포함)-영웅-노바-레프-아니마-번외(프렌즈/초월자)
    //전사 직업군 (JobCategory = warrior)
    {class_category: JobCategories[0], class_fullname: "히어로", class_littlename: "히어로"},
    {class_category: JobCategories[0], class_fullname: "팔라딘", class_littlename: "팔라딘"},
    {class_category: JobCategories[0], class_fullname: "다크나이트", class_littlename: "닼나"},
    {class_category: JobCategories[0], class_fullname: "소울마스터", class_littlename: "소마"},
    {class_category: JobCategories[0], class_fullname: "미하일", class_littlename: "미하일"},
    {class_category: JobCategories[0], class_fullname: "블래스터", class_littlename: "블래"},
    {class_category: JobCategories[0], class_fullname: "데몬슬레이어", class_littlename: "데슬"},
    {class_category: JobCategories[0], class_fullname: "데몬어벤져", class_littlename: "데벤"},
    {class_category: JobCategories[0], class_fullname: "아란", class_littlename: "아란"},
    {class_category: JobCategories[0], class_fullname: "카이저", class_littlename: "카이저"},
    {class_category: JobCategories[0], class_fullname: "아델", class_littlename: "아델"},
    {class_category: JobCategories[0], class_fullname: "렌", class_littlename: "렌"},
    {class_category: JobCategories[0], class_fullname: "제로", class_littlename: "제로"},
    
    //마법사 직업군 (JobCategory = magician)
    {class_category: JobCategories[1], class_fullname: "아크메이지(불,독)", class_littlename: "불독"},
    {class_category: JobCategories[1], class_fullname: "아크메이지(썬,콜)", class_littlename: "썬콜"},
    {class_category: JobCategories[1], class_fullname: "비숍", class_littlename: "비숍"},
    {class_category: JobCategories[1], class_fullname: "플레임위자드", class_littlename: "플위"},
    {class_category: JobCategories[1], class_fullname: "배틀메이지", class_littlename: "배메"},
    {class_category: JobCategories[1], class_fullname: "에반", class_littlename: "에반"},
    {class_category: JobCategories[1], class_fullname: "루미너스", class_littlename: "루미"},
    {class_category: JobCategories[1], class_fullname: "일리움", class_littlename: "일리움"},
    {class_category: JobCategories[1], class_fullname: "라라", class_littlename: "라라"},
    {class_category: JobCategories[1], class_fullname: "키네시스", class_littlename: "키네"},
    {class_category: JobCategories[1], class_fullname: "레테", class_littlename: "레테"},

    //궁수 직업군 (JobCategory = bowman)
    {class_category: JobCategories[2], class_fullname: "보우마스터", class_littlename: "보마"},
    {class_category: JobCategories[2], class_fullname: "신궁", class_littlename: "신궁"},
    {class_category: JobCategories[2], class_fullname: "패스파인더", class_littlename: "패파"},
    {class_category: JobCategories[2], class_fullname: "윈드브레이커", class_littlename: "윈브"},
    {class_category: JobCategories[2], class_fullname: "와일드헌터", class_littlename: "와헌"},
    {class_category: JobCategories[2], class_fullname: "메르세데스", class_littlename: "메르"},
    {class_category: JobCategories[2], class_fullname: "카인", class_littlename: "카인"},

    //도적 직업군 (JobCategory = thief)
    {class_category: JobCategories[3], class_fullname: "나이트로드", class_littlename: "나로"},
    {class_category: JobCategories[3], class_fullname: "섀도어", class_littlename: "섀도어"},
    {class_category: JobCategories[3], class_fullname: "듀얼블레이드", class_littlename: "듀블"},
    {class_category: JobCategories[3], class_fullname: "나이트워커", class_littlename: "나워"},
    {class_category: JobCategories[3], class_fullname: "팬텀", class_littlename: "팬텀"},
    {class_category: JobCategories[3], class_fullname: "카데나", class_littlename: "카데나"},
    {class_category: JobCategories[3], class_fullname: "칼리", class_littlename: "칼리"},
    {class_category: JobCategories[3], class_fullname: "호영", class_littlename: "호영"},

    //해적 직업군 (JobCategory = pirate)
    {class_category: JobCategories[4], class_fullname: "바이퍼", class_littlename: "바이퍼"},
    {class_category: JobCategories[4], class_fullname: "캡틴", class_littlename: "캡틴"},
    {class_category: JobCategories[4], class_fullname: "캐논슈터", class_littlename: "캐슈"},
    {class_category: JobCategories[4], class_fullname: "스트라이커", class_littlename: "스커"},
    {class_category: JobCategories[4], class_fullname: "메카닉", class_littlename: "메카닉"},
    {class_category: JobCategories[4], class_fullname: "은월", class_littlename: "은월"},
    {class_category: JobCategories[4], class_fullname: "엔젤릭버스터", class_littlename: "엔버"},
    {class_category: JobCategories[4], class_fullname: "아크", class_littlename: "아크"},

    //하이브리드 직업군 (JobCategory = hybrid)
    {class_category: JobCategories[5], class_fullname: "제논", class_littlename: "제논"},
];

export const extraDatas = {
    class_datas: ClassDatas,
    world_datas: WorldDatas
};

//프로젝트 색상 정보
/**
 * light / black 별
 * 색상 단순 기록용
 * (테마 변환, 적용 유무 미정)
 */

interface I_ThemeColor {
    textColor: string;
    bgColor: string;
    borderColor: string;
    itemColor: string;
};

const LightTheme: I_ThemeColor = {
    textColor: "black",
    bgColor: "white",
    borderColor: "rgb(189, 195, 199)", //flat ui palette v1
    itemColor: "rgb(220, 221, 225)" //britlsh palette
};

const DarkTheme: I_ThemeColor = {
    textColor: "white",
    bgColor: "black",
    borderColor: "rgb(53, 59, 72)",
    itemColor: "rgb(47, 54, 64)"
    //border, item => britlsh palette
};