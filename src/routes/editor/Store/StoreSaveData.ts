import { SaveData_Main } from '../Data/SaveData/SaveData_Main.js';
import { SaveData_Activity } from '../Data/SaveData/SaveData_Activity.js';
import { writable } from 'svelte/store';
import { ActivityTypes } from '../Enums/ActivityTypes.js';
import { OMF } from '../../../Egyebek/OMF';
import { LifeStyleBasicData } from '../../Browser/Data/LifeStyleBasicData';
import { tempDataStoreReducers } from './StoreTempData';

let SaveDataDefault: SaveData_Main = {
	activityList: [],
	title: undefined,
	earnings: undefined,
	incomeType: undefined
};

export let saveDataMainStore = writable(SaveDataDefault, () => {
	console.log('got a subscriber');
	return () => console.log('no more subscribers');
});

//ki lehet valtani dollarjellel az elejen. nem tudom kell e
export let saveDataMainActual: SaveData_Main;
saveDataMainStore.subscribe((value) => {
	saveDataMainActual = value;
	tempDataStoreReducers.modificationSinceSave(true);
	console.log(saveDataMainActual);
});

export abstract class saveDataMainStoreReducers {
	static changeTitle(title: string) {
		saveDataMainStore.update((value) => {
			value.title = title;

			return value;
		});
	}

	static addActivity(activityType: ActivityTypes) {
		saveDataMainStore.update((value) => {
			value.activityList = [...value.activityList, new SaveData_Activity(activityType)];

			return value;
		});
	}
	static deleteActivity(activityId: string) {
		saveDataMainStore.update((value) => {
			value.activityList = value.activityList.filter((value1, index) => {
				return value1.activityId !== activityId;
			});

			return value;
		});
	}
	static async saveData() {
		//	if (!saveDataMainActual) return;
		//	localStorage.setItem('awasave', JSON.stringify(saveDataMainActual));
		//body: JSON.stringify(saveDataMainActual),
		const response = await fetch('/api/save.json', {
			method: 'post',
			body: JSON.stringify(saveDataMainActual),
			headers: {
				'content-type': 'application/json'
			}
		});
		let data = await response.json();
		console.log(data.DiagramId);
		saveDataMainStore.update((value) => {
			value._id = data.DiagramId;
			return value;
		});
		tempDataStoreReducers.modificationSinceSave(false);
		return true;
	}

	static async loadData(_id: string) {
		console.log(_id);
		const response = await fetch('/api/load.json', {
			method: 'post',
			body: _id,
			headers: {
				'content-type': 'application/json'
			}
		});
		let responsejson = await response.json();
		console.log(responsejson);
		let data: SaveData_Main = responsejson.docData;
		if (data) {
			saveDataMainStore.update((value) => {
				return data;
			});
		}
		return true;
	}
	static async deleteLifeStyle(_id?: string) {
		console.log(saveDataMainActual._id);
		let _id2 = _id ? _id : saveDataMainActual._id;
		console.log(_id2);
		const response = await fetch('/api/delete.json', {
			method: 'post',
			body: JSON.stringify(_id2),
			headers: {
				'content-type': 'application/json'
			}
		});
		if (saveDataMainActual._id === _id) {
			saveDataMainStore.update((value) => {
				return SaveDataDefault;
			});
			window.open('/browser', '_self');
		}
	}
	static settingChange(activityId: string, settingName: string, settingValue: string) {
		saveDataMainStore.update((value) => {
			let activity = value.activityList.find((value1) => {
				return value1.activityId == activityId;
			});
			if (!activity) return value;

			OMF.set(activity.settings, settingName, settingValue);
			console.log(activity);

			return value;
		});
	}

	static changeActivityOrder(fromActivityId: string, toActivityId: string) {
		console.log('changeActivityOrder');
		saveDataMainStore.update((value) => {
			let fromIndex = 0;
			let toIndex = 0;
			value.activityList.forEach((value1, index) => {
				if (value1.activityId == fromActivityId) {
					fromIndex = index;
				}
			});
			value.activityList.forEach((value1, index) => {
				if (value1.activityId == toActivityId) {
					toIndex = index;
				}
			});

			function arraymove(arr: any[], fromIndex: number, toIndex: number) {
				let element = arr[fromIndex];
				arr.splice(fromIndex, 1);
				arr.splice(toIndex, 0, element);
				return arr;
			}

			value.activityList = arraymove(value.activityList, fromIndex, toIndex);
			console.log(value.activityList);
			return value;
		});
	}

	static changeDuration(activityId: string, duration: number) {
		saveDataMainStore.update((value) => {
			let activity = value.activityList.find((value1) => {
				return value1.activityId == activityId;
			});
			if (!activity) return value;
			activity.time = duration;

			return value;
		});
	}
	static changeCost(activityId: string, cost: number) {
		saveDataMainStore.update((value) => {
			let activity = value.activityList.find((value1) => {
				return value1.activityId == activityId;
			});
			if (!activity) return value;
			activity.money = cost;

			return value;
		});
	}
	static changeActivity(
		activityId: string,
		activityBackup: (saveData: SaveData_Activity) => SaveData_Activity
	) {
		saveDataMainStore.update((value) => {
			let activity = value.activityList.find((value1) => {
				return value1.activityId == activityId;
			});
			if (!activity) return value;

			activity = activityBackup(activity);

			return value;
		});
	}

	static changeSave(saveBackup: (saveData: SaveData_Main) => SaveData_Main) {
		saveDataMainStore.update(saveBackup);
	}
}
