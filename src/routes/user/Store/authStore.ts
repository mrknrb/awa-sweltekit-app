import { writable } from 'svelte/store';
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth';
import { goto } from '$app/navigation';
import { ActivityTypes } from '../../../routes/editor/Enums/ActivityTypes';
import { SaveData_Activity } from '../../../routes/editor/Data/SaveData/SaveData_Activity';
import { saveDataMainStore } from '../../../routes/editor/Store/StoreSaveData';

export const isLoggedIn = writable(false);

export abstract class authStoreReducers {
	static async login(email: string, password: string) {
		//	console.log(email, password);
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				//	console.log(errorCode);
				//	console.log(errorMessage);
			});
	}
	static logout() {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				return null;
			})
			.catch((error) => {
				//	console.error(error);
			});
	}
	static signup(email: string, password: string) {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				//	console.log(user);
				goto('/');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	}

	static unauthorisedLogin() {
		return null;
	}
}
