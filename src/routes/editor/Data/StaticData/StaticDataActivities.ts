import { StaticData_Activity } from './StaticDataTypes/StaticData_Activity';
import { ActivityTypes } from '../../Enums/ActivityTypes';
import { TimeUnits } from '../../../../Egyebek/TimeUnit/TimeUnits';
import { SettingsTypes } from '../../Enums/SettingsTypes';
import { ActivityGroupTypes } from '../../Enums/ActivityGroupTypes';

let housing: StaticData_Activity = {
	activitySettings: [
		{
			settingName: 'Ownership',
			settingOptions: [
				{
					coreValueTypes: [],
					settingOptionName: 'Own house'
				},
				{
					coreValueTypes: [],
					settingOptionName: 'Rent'
				}
			],
			settingType: SettingsTypes.dropDown
		}
	],
	activityType: ActivityTypes.housing,
	defaultUnit: TimeUnits.Month,
	hasTime: false,
	activityGroup: ActivityGroupTypes.housing,
	canBeWithOthers: false
};
let eating: StaticData_Activity = {
	activitySettings: [
		{
			settingName: 'Healthiness',
			settingOptions: [
				{
					coreValueTypes: [],
					settingOptionName: 'JunkFood'
				},
				{
					coreValueTypes: [],
					settingOptionName: 'Normal'
				},
				{
					coreValueTypes: [],
					settingOptionName: 'Healthy'
				}
			],
			settingType: SettingsTypes.dropDown
		},
		{
			settingName: 'Taste',
			settingOptions: [
				{
					coreValueTypes: [],
					settingOptionName: 'Minimal'
				},
				{
					coreValueTypes: [],
					settingOptionName: 'Normal'
				},
				{
					coreValueTypes: [],
					settingOptionName: 'Very Good'
				}
			],
			settingType: SettingsTypes.dropDown
		}
	],
	activityType: ActivityTypes.eating,
	defaultUnit: TimeUnits.Day,
	hasTime: true,
	canBeWithOthers: true,
	activityGroup: ActivityGroupTypes.eating
};

export let staticDataActivities: StaticData_Activity[] = [
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	housing,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating,
	eating
];
