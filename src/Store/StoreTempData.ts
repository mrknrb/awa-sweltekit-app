import { writable } from 'svelte/store';

let TempDataDefault: TempData = {
	mouseDown: true
};

type TempData = {
	mouseDown: boolean;
};

export let storeTempData = writable(TempDataDefault, () => {
	console.log('got a subscriber');
	return () => console.log('no more subscribers');
});
