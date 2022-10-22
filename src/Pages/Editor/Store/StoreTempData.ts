import { writable } from 'svelte/store';
import { SaveData_Main } from '../Data/SaveData/SaveData_Main';
import { saveDataMainStore } from './StoreSaveData';

let TempDataDefault: TempData = {
	draggingActionId: '',
	activityPickerActive: false
};

export type TempData = {
	draggingActionId: string;
	activityPickerActive: boolean;
};

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
}
