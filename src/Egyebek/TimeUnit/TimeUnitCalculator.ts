import {TimeUnits} from "./TimeUnits";
import {TimeUnitConverterNumbers} from "./TimeUnitConverterNumbers";


export abstract class TimeUnitCalculator {


    static UnitToDailyMinutes(timeUnit: TimeUnits, number: number) {


        return number * TimeUnitConverterNumbers[timeUnit]


    }

    static DailyMinutesToUnit(timeUnit: TimeUnits, number: number) {

        return number / TimeUnitConverterNumbers[timeUnit]

    }


}