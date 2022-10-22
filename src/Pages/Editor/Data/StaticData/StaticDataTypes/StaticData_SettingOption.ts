import { CoreValueTypes } from '../../../Enums/CoreValueTypes';

export interface StaticData_SettingOption {
	settingOptionName?: string;
	coreValueTypes?: { coreValue: CoreValueTypes; rank: number }[];
	moneyMultiplier?: number;
	moneyAdd?: number;
}
