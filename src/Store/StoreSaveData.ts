import {SaveData_Main} from "../Data/SaveData/SaveData_Main.js";
import {SaveData_Activity} from "../Data/SaveData/SaveData_Activity.js";
import {writable} from "svelte/store";
import {ActivityTypes} from "../Enums/ActivityTypes.js";
import {OMF} from "../Egyebek/OMF";

let SaveDataDefault: SaveData_Main = {
    _id: Math.random().toString(),
    activityList: [],
    saveName: undefined,
    earning: undefined,
    incomeType: undefined
}

export let saveDataMainStore = writable(SaveDataDefault, () => {
    console.log('got a subscriber');
    return () => console.log('no more subscribers');
});
export let saveDataMainActual: SaveData_Main
saveDataMainStore.subscribe(value => {
    saveDataMainActual = value
    console.log(saveDataMainActual)
})


export abstract class saveDataMainStoreReducers {
    static addActivity(activityType: ActivityTypes) {


        saveDataMainStore.update((value) => {


            value.activityList = [...value.activityList, new SaveData_Activity(activityType)]

            return value
        })


    }

    static saveData() {
        if (!saveDataMainActual) return
        localStorage.setItem("awasave", JSON.stringify(saveDataMainActual));
    }

    static loadData() {
        let data = localStorage.getItem("awasave");
        if (!data) return
        saveDataMainStore.set(JSON.parse(data))

    }

    static settingChange(activityId: string, settingName: string, settingValue: string) {
        saveDataMainStore.update((value) => {
            let activity = value.activityList.find(value1 => {
                return value1.activityId == activityId

            })
            if (!activity) return value

            OMF.set(activity.settings, settingName, settingValue)
            console.log(activity)

            return value
        })


    }
}