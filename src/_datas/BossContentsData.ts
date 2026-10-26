/**
 * 보스 컨텐츠 데이터
 * 일일, 주간, 월간
 */

interface I_BossContentsData {
    contents_name: string;
    little_name: string;
    boss_rank: string;
    cycle: string;
    crystal: number;
};

/**
 * 보스 난이도 아이콘에 삽입될 텍스트
 * 보스 난이도 아이콘의 색상 정보 등
 * 난이도와 관련된 데이터들의 type 정의
 */
interface I_BossRankInfo {
    rank_name: string;
    rank_name_kr: string;
    rank_little_name: string;
    text_color: string;
    bg_color: string;
    border_color: string;
};

/**
 * 주간 수익 (/incomes)에서 참고할 데이터는
 * 주간 보스 및 월간 보스 결정 수익만 참고하기에
 * 일일 보스, 'cycle: daily'인 보스의 결정 수익 값은
 * 0으로 처리하였음
 */
export const BossContentsDatas: I_BossContentsData[] = [
    //일일 보스 컨텐츠 (cycle: daily)
    //주간 보스 컨텐츠 (cycle: weekly)
    /**
     {contents_name: "", little_name: "", boss_rank: "", cycle: "daily", crystal: 0},
     */
    {contents_name: "자쿰", little_name: "자쿰", boss_rank: "easy", cycle: "daily", crystal: 0},
    {contents_name: "자쿰", little_name: "자쿰", boss_rank: "normal", cycle: "daily", crystal: 0},
    {contents_name: "자쿰", little_name: "자쿰", boss_rank: "chaos", cycle: "weekly", crystal: 4040000},

    {contents_name: "매그너스", little_name: "매그", boss_rank: "easy", cycle: "daily",crystal: 4280000},
    {contents_name: "매그너스", little_name: "매그", boss_rank: "normal", cycle: "daily",crystal: 4280000},
    {contents_name: "매그너스", little_name: "매그", boss_rank: "hard", cycle: "weekly",crystal: 4280000},

    {contents_name: "힐라", little_name: "힐라", boss_rank: "normal", cycle: "daily", crystal: 0},
    {contents_name: "힐라", little_name: "힐라", boss_rank: "hard", cycle: "daily", crystal: 0},

    {contents_name: "파풀라투스", little_name: "파풀", boss_rank: "easy", cycle: "daily", crystal: 0},
    {contents_name: "파풀라투스", little_name: "파풀", boss_rank: "normal", cycle: "daily", crystal: 0},
    {contents_name: "파풀라투스", little_name: "파풀", boss_rank: "chaos", cycle: "weekly", crystal: 6550000},

    {contents_name: "피에르", little_name: "피에르", boss_rank: "normal", cycle: "daily", crystal: 0},
    {contents_name: "피에르", little_name: "피에르", boss_rank: "chaos", cycle: "weekly", crystal: 4080000},

    {contents_name: "반반", little_name: "반반", boss_rank: "normal", cycle: "daily", crystal: 0},
    {contents_name: "반반", little_name: "반반", boss_rank: "chaos", cycle: "weekly", crystal: 4070000},

    {contents_name: "블러디퀸", little_name: "블퀸", boss_rank: "normal", cycle: "daily", crystal: 0},
    {contents_name: "블러디퀸", little_name: "블퀸", boss_rank: "chaos", cycle: "weekly", crystal: 4070000},

    {contents_name: "벨룸", little_name: "벨룸", boss_rank: "normal", cycle: "daily", crystal: 0},
    {contents_name: "벨룸", little_name: "벨룸", boss_rank: "chaos", cycle: "weekly", crystal: 4640000},

    {contents_name: "핑크빈", little_name: "핑크빈", boss_rank: "normal", cycle: "daily", crystal: 0},
    {contents_name: "핑크빈", little_name: "핑크빈", boss_rank: "chaos", cycle: "daily", crystal: 0},

    {contents_name: "시그너스", little_name: "시그", boss_rank: "normal", cycle: "daily", crystal: 0},

    {contents_name: "카웅", little_name: "카웅", boss_rank: "normal", cycle: "daily", crystal: 0},

    {contents_name: "반 레온", little_name: "반레온", boss_rank: "easy", cycle: "daily", crystal: 0},
    {contents_name: "반 레온", little_name: "반레온", boss_rank: "normal", cycle: "daily", crystal: 0},
    {contents_name: "반 레온", little_name: "반레온", boss_rank: "hard", cycle: "daily", crystal: 0},

    {contents_name: "혼테일", little_name: "혼테일", boss_rank: "easy", cycle: "daily", crystal: 0},
    {contents_name: "혼테일", little_name: "혼테일", boss_rank: "normal", cycle: "daily", crystal: 0},
    {contents_name: "혼테일", little_name: "혼테일", boss_rank: "chaos", cycle: "daily", crystal: 0},

    {contents_name: "아카이럼", little_name: "아카이럼", boss_rank: "easy", cycle: "daily", crystal: 0},
    {contents_name: "아카이럼", little_name: "아카이럼", boss_rank: "normal", cycle: "daily", crystal: 0},

    {contents_name: "스우", little_name: "스우", boss_rank: "normal", cycle: "weekly", crystal: 8350000},
    {contents_name: "스우", little_name: "스우", boss_rank: "hard", cycle: "weekly", crystal: 48900000},
    {contents_name: "스우", little_name: "스우", boss_rank: "extreme", cycle: "weekly", crystal: 545000000},

    {contents_name: "데미안", little_name: "데미안", boss_rank: "normal", cycle: "weekly", crystal: 8750000},
    {contents_name: "데미안", little_name: "데미안", boss_rank: "hard", cycle: "weekly", crystal: 46400000},     

    {contents_name: '가디언 엔젤 슬라임', little_name: "가엔슬", boss_rank: 'normal', cycle: 'weekly', crystal: 12700000},
    {contents_name: '가디언 엔젤 슬라임', little_name: "가엔슬", boss_rank: 'chaos', cycle: 'weekly', crystal: 71300000},

    {contents_name: '루시드', little_name: "루시드", boss_rank: 'easy', cycle: 'weekly', crystal: 14900000},
    {contents_name: '루시드', little_name: "루시드", boss_rank: 'normal', cycle: 'weekly', crystal: 17800000},
    {contents_name: '루시드', little_name: "루시드", boss_rank: 'hard', cycle: 'weekly', crystal: 59700000},

    {contents_name: '윌', little_name: "윌", boss_rank: 'easy', cycle: 'weekly', crystal: 16100000},
    {contents_name: '윌', little_name: "윌", boss_rank: 'normal', cycle: 'weekly', crystal: 20500000},
    {contents_name: '윌', little_name: "윌", boss_rank: 'hard', cycle: 'weekly', crystal: 73200000},

    {contents_name: '더스크', little_name: "더스크", boss_rank: 'normal', cycle: 'weekly', crystal: 22000000},
    {contents_name: '더스크', little_name: "더스크", boss_rank: 'chaos', cycle: 'weekly', crystal: 66300000},

    {contents_name: '진 힐라', little_name: "진힐라", boss_rank: 'normal', cycle: 'weekly', crystal: 67600000},
    {contents_name: '진 힐라', little_name: "진힐라", boss_rank: 'hard', cycle: 'weekly', crystal: 100000000},

    {contents_name: '듄켈', little_name: "듄켈", boss_rank: 'normal', cycle: 'weekly', crystal: 23700000},
    {contents_name: '듄켈', little_name: "듄켈", boss_rank: 'hard', cycle: 'weekly', crystal: 89600000},

    {contents_name: '선택받은 세렌', little_name: "세렌", boss_rank: 'normal', cycle: 'weekly', crystal: 167000000},
    {contents_name: '선택받은 세렌', little_name: "세렌", boss_rank: 'hard', cycle: 'weekly', crystal: 320000000},
    {contents_name: '선택받은 세렌', little_name: "세렌", boss_rank: 'extreme', cycle: 'weekly', crystal: 1840000000},

    {contents_name: '감시자 칼로스', little_name: "칼로스", boss_rank: 'easy', cycle: 'weekly', crystal: 238000000},
    {contents_name: '감시자 칼로스', little_name: "칼로스", boss_rank: 'normal', cycle: 'weekly', crystal: 479000000},
    {contents_name: '감시자 칼로스', little_name: "칼로스", boss_rank: 'chaos', cycle: 'weekly', crystal: 1230000000},
    {contents_name: '감시자 칼로스', little_name: "칼로스", boss_rank: 'extreme', cycle: 'weekly', crystal: 4104000000},

    {contents_name: '최초의 대적자', little_name: "대적자", boss_rank: 'easy', cycle: 'weekly', crystal: 261000000},
    {contents_name: '최초의 대적자', little_name: "대적자", boss_rank: 'normal', cycle: 'weekly', crystal: 532000000},
    {contents_name: '최초의 대적자', little_name: "대적자", boss_rank: 'hard', cycle: 'weekly', crystal: 1390000000},
    {contents_name: '최초의 대적자', little_name: "대적자", boss_rank: 'extreme', cycle: 'weekly', crystal: 4712000000},

    {contents_name: '카링', little_name: "카링", boss_rank: 'easy', cycle: 'weekly', crystal: 320000000},
    {contents_name: '카링', little_name: "카링", boss_rank: 'normal', cycle: 'weekly', crystal: 593000000},
    {contents_name: '카링', little_name: "카링", boss_rank: 'hard', cycle: 'weekly', crystal: 15600000},
    {contents_name: '카링', little_name: "카링", boss_rank: 'extreme', cycle: 'weekly', crystal: 4845000000},

    {contents_name: '찬란한 흉성', little_name: "흉성", boss_rank: 'normal', cycle: 'weekly', crystal: 576000000},
    {contents_name: '찬란한 흉성', little_name: "흉성", boss_rank: 'hard', cycle: 'weekly', crystal: 2678000000}, 

    {contents_name: '벨로나', boss_rank: 'easy', little_name: "벨로나", cycle: 'weekly', crystal: 396000000},
    {contents_name: '벨로나', boss_rank: 'normal', little_name: "벨로나", cycle: 'weekly', crystal: 824000000}, 
    {contents_name: '벨로나', boss_rank: 'hard', little_name: "벨로나", cycle: 'weekly',  crystal: 2950000000},

    {contents_name: '림보', little_name: "림보", boss_rank: 'normal', cycle: 'weekly', crystal: 995000000},
    {contents_name: '림보', little_name: "림보", boss_rank: 'hard', cycle: 'weekly', crystal: 2385000000},
    {contents_name: '림보', little_name: "림보", boss_rank: 'extreme', cycle: 'weekly', crystal: 7500000000},

    {contents_name: '발드릭스', little_name: "발드", boss_rank: 'normal', cycle: 'weekly', crystal: 1320000000},
    {contents_name: '발드릭스', little_name: "발드", boss_rank: 'hard', cycle: 'weekly', crystal: 3780000000},
    {contents_name: '발드릭스', little_name: "발드", boss_rank: 'extreme', cycle: 'weekly', crystal: 9600000000},

    {contents_name: '유피테르', little_name: "유피", boss_rank: 'normal', cycle: 'weekly', crystal: 1560000000}, 
    {contents_name: '유피테르', little_name: "유피", boss_rank: 'hard', cycle: 'weekly', crystal: 5387000000},

    //월간 보스 컨텐츠 (cycle: monthly)
    {contents_name: "검은마법사", little_name: "검마", boss_rank: "hard", cycle: "monthly", crystal: 465000000},
    {contents_name: "검은마법사", little_name: "검마", boss_rank: "extreme", cycle: "monthly", crystal: 5680000000}
];

export const RankColorInfos: I_BossRankInfo[] = [
    //이지 난이도 아이콘 텍스트 및 색상
    {
        rank_name: "easy", 
        rank_name_kr: "이지", 
        rank_little_name: "E", 
        text_color: "#ffffff", 
        bg_color: "#666666", 
        border_color: "#bbbbbb"
    },
    //노말 난이도 아이콘 텍스트 및 색상
    {
        rank_name: "normal",
        rank_name_kr: "노말",
        rank_little_name: "N",
        text_color: "#ffffff",
        bg_color: "#319DBC",
        border_color: "#319DBC",
    },
    //하드 난이도 아이콘 텍스트 및 색상
    {
        rank_name: "hard",
        rank_name_kr: "하드",
        rank_little_name: "H",
        text_color: "#ffffff",
        bg_color: "#aa3355",
        border_color: "#aa3355"
    },
    //카오스 난이도 아이콘 텍스트 및 색상
    {
        rank_name: "chaos",
        rank_name_kr: "카오스",
        rank_little_name: "C",
        text_color: "#ffe1be",
        bg_color: "#222233",
        border_color: "#ffe1be"
    },
    //익스트림 난이도 아이콘 텍스트 및 색상
    {
        rank_name: "extreme",
        rank_name_kr: "익스트림",
        rank_little_name: "E",
        text_color: "#ee3355",
        bg_color: "#222233",
        border_color: "#ee3355"
    }
]