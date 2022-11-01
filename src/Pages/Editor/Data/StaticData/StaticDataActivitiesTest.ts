import { StaticData_Activity } from './StaticDataTypes/StaticData_Activity';
import { ActivityTypes } from '../../Enums/ActivityTypes';
import { SettingsTypes } from '../../Enums/SettingsTypes';
import { TimeUnits } from '../../../../Egyebek/TimeUnit/TimeUnits';

let housing: StaticData_Activity = {
	hasTime: false,
	activityType: ActivityTypes.housing,
	activitySettings: [
		{
			settingName: 'dikk',
			settingOptions: [{ settingOptionName: 'ok' }],
			settingType: SettingsTypes.dropDown
		}
	],
	defaultUnit: TimeUnits.Week,
	canBeWithOthers: true
};

let activitiesStaticList: StaticData_Activity[] = [housing];
