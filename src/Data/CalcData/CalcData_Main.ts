import {SaveData_Main} from "../SaveData/SaveData_Main";
import {CalcDataActivityListElement} from "./CalcDataActivityListElement";
import {CalcActivity} from "./CalcActivity";
import {OMap} from "../../Egyebek/OMap";
import {ActivityTypes} from "../../Enums/ActivityTypes";



export class CalcData_Main {
    saveData_Main:SaveData_Main
    constructor(saveData_Main:SaveData_Main) {
        this.saveData_Main=saveData_Main
    }



//@ts-ignore
    activityLists:OMap<CalcDataActivityListElement>={}
    activities=new Map<ActivityTypes,CalcActivity>()



}