import { ActivityTypes } from '../../../Enums/ActivityTypes';
import { TimeUnits } from '../../../../../Egyebek/TimeUnit/TimeUnits';
import { StaticData_Setting } from './StaticData_Setting';
import { ActivityGroupTypes } from '../../../Enums/ActivityGroupTypes';

export interface StaticData_ActivityGroup {
	activityGroupType: ActivityGroupTypes;
	color: string;
}
