import {StaticData_SettingOption} from "./StaticData_SettingOption";
import {SettingsTypes} from "../../../Enums/SettingsTypes.js";


export interface StaticData_Setting {

    settingName: string
    settingType:SettingsTypes
    settingOptions: StaticData_SettingOption[]



}