import { writable } from 'svelte/store';
import { SaveData_Main } from '../Data/SaveData/SaveData_Main';

let TempDataDefault: TempData = {
	draggingActionId: '',
	activityPickerActive: false,
	highlightedActivitityNumber: undefined,
	modificationSinceSave: false,
	currentTabId: 0
};

export type TempData = {
	draggingActionId: string;
	activityPickerActive: boolean;
	highlightedActivitityNumber: number | undefined;
	modificationSinceSave: boolean;
	currentTabId: number;
};

export let tabMaxNumber = 2;
export let storeTempData = writable(TempDataDefault, () => {
	console.log('got a subscriber');
	return () => console.log('no more subscribers');
});
export abstract class tempDataStoreReducers {
	static draggingModeStartStop(draggingId: string) {
		storeTempData.update((value) => {
			value.draggingActionId = draggingId;
			return value;
		});
	}
	static activityPickerActivate(active: boolean) {
		console.log(active);
		storeTempData.update((value) => {
			value.activityPickerActive = active;
			return value;
		});
	}

	static highlightActivity(number?: number) {
		storeTempData.update((value) => {
			value.highlightedActivitityNumber = number;
			return value;
		});
	}
	static modificationSinceSave(trueFalse: boolean) {
		storeTempData.update((value1) => {
			value1.modificationSinceSave = trueFalse;
			return value1;
		});
	}
	static nextPrevTab(trueFalse: boolean) {
		storeTempData.update((value1) => {
			let num: number = trueFalse ? 1 : -1;

			let eredmeny = value1.currentTabId + num;
			if (eredmeny >= 0 && eredmeny <= tabMaxNumber) {
				value1.currentTabId = eredmeny;
			}
			return value1;
		});
	}
}
