import { ActivityTypes } from '../../../Enums/ActivityTypes';
import { TimeUnits } from '../../../Enums/TimeUnit/TimeUnits';
import { StaticData_Setting } from './StaticData_Setting';
import { ActivityGroupTypes } from '../../../Enums/ActivityGroupTypes';

export interface StaticData_ActivityGroup {
	activityGroupType: ActivityGroupTypes;
	color: string;
}
