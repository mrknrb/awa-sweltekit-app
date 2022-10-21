import { writable } from 'svelte/store';

let TempDataDefault: TempData = {
	draggingActionId: ''
};

export type TempData = {
	draggingActionId: string;
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
}
