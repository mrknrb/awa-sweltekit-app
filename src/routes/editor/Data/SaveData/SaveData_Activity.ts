import { OMap } from '../../../../Egyebek/OMap';
import { OMF } from '../../../../Egyebek/OMF.js';
import { ActivityTypes } from '../../Enums/ActivityTypes.js';
import { TimeUnits } from '../../Enums/TimeUnit/TimeUnits';
import { MoneyUnits } from '../../Enums/MoneyUnit/MoneyUnits';

export class SaveData_Activity {
	activityId = Math.random().toString();
	activityType: ActivityTypes;
	time = 0;
	money = 0;
	settings: OMap<string> = OMF.create();
	timeUnit: TimeUnits = TimeUnits.Day;
	moneyTimeUnit: TimeUnits = TimeUnits.Day;
	moneyUnit = MoneyUnits.Money;

	constructor(activityType: ActivityTypes) {
		this.activityType = activityType;
	}
}
