import {MrkLib} from "./MrkLib";
import {OMap} from "./OMap";


export class OMF {
static create<dataType>() {

    // @ts-ignore
   return {} as OMap<dataType>
}

    static set<dataType>(oMap: OMap<dataType>, key: string, object: dataType) {

        // @ts-ignore
        oMap[key] = object
    }

    static get<dataType>(oMap: OMap<dataType>, key: string) {
        // @ts-ignore
        return oMap[key] as dataType|undefined
    }

    static forEach<dataType>(oMap: OMap<dataType>, forEachCallback: (object: dataType, key: string) => any) {
        MrkLib.forEachInObject<dataType>(oMap, (object, key) => {
            // @ts-ignore
            forEachCallback(object, key)
        })
    }

    static find<dataType>(oMap: OMap<dataType>, findCallback: (object: dataType, key: string) => boolean) {
        let answer: { key: string, object: dataType } | undefined = undefined
        MrkLib.forEachInObject<dataType>(oMap, (object, key) => {
            // @ts-ignore
            if (findCallback(object, key)) {
                // @ts-ignore
                answer = {object, key}
            }
        })
        return answer
    }

    static merge<dataType>(oMap: OMap<dataType>, otherObject: OMap<dataType>) {

        for (var attrname in otherObject) {
            // @ts-ignore
            oMap[attrname] = otherObject[attrname];
        }
    }


}