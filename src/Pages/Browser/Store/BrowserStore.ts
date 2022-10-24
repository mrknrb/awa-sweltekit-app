import { writable } from 'svelte/store';
import { BrowserSearchQuery } from '../Data/BrowserSearchQuery';
import { LifeStyleBasicData } from '../Data/LifeStyleBasicData';

interface Browser_Main {
	i: string;
}

let BrowserDefault: Browser_Main = {
	i: ''
};

export let browserStore = writable(BrowserDefault, () => {
	console.log('got a subscriber');
	return () => console.log('no more subscribers');
});

export abstract class BrowserStoreReducers {
	static async loadLifestyleList(searchQuery: BrowserSearchQuery) {
		//	if (!saveDataMainActual) return;
		//	localStorage.setItem('awasave', JSON.stringify(saveDataMainActual));
		//body: JSON.stringify(saveDataMainActual),

		const response = await fetch('/api/loadsearch.json', {
			method: 'post',
			body: JSON.stringify(searchQuery),
			headers: {
				'content-type': 'application/json'
			}
		});
		let responsejson = await response.json();
		let data: LifeStyleBasicData[] = responsejson.docs;
		console.log(data);
		return data;
	}
}
