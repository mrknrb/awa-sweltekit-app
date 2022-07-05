import {MoneyUnits} from "./MoneyUnits";
import {MoneyUnitConverterNumbers} from "./MoneyUnitConverterNumbers";


export abstract class MoneyUnitCalculator {


    static UnitToCost_Hour(moneyUnit: MoneyUnits, number: number) {


        return number * MoneyUnitConverterNumbers[moneyUnit]


    }

    static Cost_HourToUnit(moneyUnit: MoneyUnits, number: number) {

        return number / MoneyUnitConverterNumbers[moneyUnit]

    }


}