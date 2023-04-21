import { ActivityTypes } from '../../../Enums/ActivityTypes';
import { TimeUnits } from '../../../../../Egyebek/TimeUnit/TimeUnits';
import { StaticData_Setting } from './StaticData_Setting';
import { ActivityGroupTypes } from '../../../Enums/ActivityGroupTypes';

export interface StaticData_Activity {
	activityType: ActivityTypes;
	defaultUnit: TimeUnits;
	activitySettings: StaticData_Setting[];
	hasTime: boolean;
	canBeWithOthers: boolean;
	activityGroup: ActivityGroupTypes;
}
