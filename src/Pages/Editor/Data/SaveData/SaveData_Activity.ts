import { OMap } from '../../../../Egyebek/OMap';
import { OMF } from '../../../../Egyebek/OMF.js';
import { ActivityTypes } from '../../Enums/ActivityTypes.js';

export class SaveData_Activity {
	activityId = Math.random().toString();
	activityType: ActivityTypes;
	duration = 0;
	settings: OMap<string> = OMF.create();

	constructor(activityType: ActivityTypes) {
		this.activityType = activityType;
	}
}
