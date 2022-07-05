
import {SaveData_Activity} from "../SaveData/SaveData_Activity.js";
import {StaticData_Activity} from "../StaticData/StaticDataTypes/StaticData_Activity.js";

export class CalcActivity {


    constructor(staticData_Activity:StaticData_Activity,saveData_Activity?:SaveData_Activity) {
        this.staticData_Activity=staticData_Activity
        this.saveData_Activity=saveData_Activity
    }


    saveData_Activity?:SaveData_Activity
    staticData_Activity:StaticData_Activity


    price:number=0



}