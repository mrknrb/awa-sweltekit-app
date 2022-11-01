import { ActivityTypes } from '../../../Enums/ActivityTypes';
import { TimeUnits } from '../../../../../Egyebek/TimeUnit/TimeUnits';
import { StaticData_Setting } from './StaticData_Setting';

export interface StaticData_ActivityGroup {
	activityType: ActivityTypes;
	defaultUnit: TimeUnits;
	activitySettings: StaticData_Setting[];
	hasTime: boolean;
	canBeWithOthers: boolean;
}
