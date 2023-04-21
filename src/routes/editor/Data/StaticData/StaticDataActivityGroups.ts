import { StaticData_Activity } from './StaticDataTypes/StaticData_Activity';
import { StaticData_ActivityGroup } from './StaticDataTypes/StaticData_ActivityGroup';
import { ActivityGroupTypes } from '../../Enums/ActivityGroupTypes';

let housing: StaticData_ActivityGroup = {
	activityGroupType: ActivityGroupTypes.housing,
	color: 'blue'
};
let eating: StaticData_ActivityGroup = {
	activityGroupType: ActivityGroupTypes.eating,
	color: 'red'
};

export let staticDataActivityGroups: StaticData_ActivityGroup[] = [housing, eating];
