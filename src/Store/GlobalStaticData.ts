
import * as data from '../Data/StaticData/StaticDataMain.json';
import {StaticData_Main} from "../Data/StaticData/StaticDataTypes/StaticData_Main.js";
import {ActivityTypes} from "../Enums/ActivityTypes.js";

const data2: StaticData_Main = data as StaticData_Main

export const globalStaticData = data2

export function getActivityStaticDataByType(activityType:ActivityTypes){
   return globalStaticData.activities.find(value => {
        return activityType==value.activityType

    })

}