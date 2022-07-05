import {ActivityGroupTypes} from "../../../Enums/ActivityGroupTypes";
import {ProductiveTypes} from "../../../Enums/ProductiveTypes";
import {ActivityTypes} from "../../../Enums/ActivityTypes";
import {TimeUnits} from "../../../Egyebek/TimeUnit/TimeUnits";
import {StaticData_Setting} from "./StaticData_Setting";


export interface StaticData_Activity {
    activityType: ActivityTypes
    activityLogo: string
    activityGroupType: ActivityGroupTypes
    productive: ProductiveTypes
    defaultUnit:TimeUnits
    basePrice:number
    activitySettings: StaticData_Setting[]
}