import firebaseApp from '../../../Egyebek/FirebaseInit';

import type { RequestHandler } from './$types';

import { doc, setDoc } from 'firebase/firestore';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { SaveData_Main } from '../../../Pages/Editor/Data/SaveData/SaveData_Main';

export const POST: RequestHandler = async ({ request }) => {
	const db = getFirestore(firebaseApp);

	let body: SaveData_Main = await request.json();

	if (!body._id) {
		let docRef = await doc(collection(db, 'lifestyles'));
		body._id = docRef.id;
	}

	await setDoc(doc(db, 'lifestyles', body._id), body);

	console.log('Document has been added successfully');
	return new Response(JSON.stringify({ DiagramId: body._id }), {
		headers: {
			'content-type': 'application/json; charset=utf-8'
		}
	});
};
