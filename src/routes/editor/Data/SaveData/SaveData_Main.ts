import { IncomeTypes } from '../../Enums/IncomeTypes';
import { SaveData_Activity } from './SaveData_Activity.js';

export interface SaveData_Main {
	_id?: string;
	title?: string;
	earnings?: number;
	sleepTime?: number;
	workTime?: number;
	incomeType?: IncomeTypes;
	activityList: SaveData_Activity[];
}
