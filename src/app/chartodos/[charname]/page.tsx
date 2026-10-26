import { CharbasicDataFetches, OcidFetches, SchedulerDataFetches } from "@/_datas/Fetches";
import styles from "../../../_styles/chartodos/chartodospage.module.css";
import CharToDos from "@/_components/chartodos/CharToDos";

interface I_ChartodosPage {
    params: Promise<{charname: string}>;
};

export default async function CharToDosPage({params}: I_ChartodosPage){
    const search_name = (await params).charname;

    const OcidData = await OcidFetches(search_name);
    const CharacterData = await CharbasicDataFetches(OcidData?.ocid);
    const ScheduleData = await SchedulerDataFetches(OcidData?.ocid);

    if(!OcidData || !CharacterData || !ScheduleData){
        console.clear();
        console.log(`캐릭터 정보를 불러오지 못했습니다.`);
        console.log(OcidData);
        console.log(CharacterData)
        console.log(ScheduleData)
    }

    return (
        <div className={styles.chartodospage_wrapper}>
            {
                (OcidData === null || CharacterData === null || ScheduleData === null) ? null : (
                    <CharToDos 
                        character_ocid={OcidData.ocid}
                        character_basic_data={CharacterData}
                        schedule_data={ScheduleData}
                    />
                )
            }
        </div>
    );
}