import {CoreValueTypes} from "../../../Enums/CoreValueTypes.js";

export let CoreValueTypesData=new Map<CoreValueTypes,CoreValueTypesDataType>  ()

CoreValueTypesData.set(CoreValueTypes.adventure,{
    color: "#ff7a00",
})
CoreValueTypesData.set(CoreValueTypes.altruism,{
    color: "#731a9d",
})
CoreValueTypesData.set(CoreValueTypes.creation,{
    color: "#1a9d92",
})
CoreValueTypesData.set(CoreValueTypes.health,{
    color: "#469d1a",
})
CoreValueTypesData.set(CoreValueTypes.adventure,{
    color: "#ff7a00",
})
CoreValueTypesData.set(CoreValueTypes.adventure,{
    color: "#ff7a00",
})
CoreValueTypesData.set(CoreValueTypes.adventure,{
    color: "#ff7a00",
})



export interface CoreValueTypesDataType {

    color: string


}