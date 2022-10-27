import type { RequestHandler } from '@sveltejs/kit';
import { doc, setDoc } from 'firebase/firestore';
import firebaseApp from '../fb';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { SaveData_Main } from '../../Pages/Editor/Data/SaveData/SaveData_Main';

export const post: RequestHandler = async ({ request }) => {
	const db = getFirestore(firebaseApp);

	let body: SaveData_Main = await request.json();

	if (!body._id) {
		let docRef = await doc(collection(db, 'lifestyles'));
		body._id = docRef.id;
	}

	await setDoc(doc(db, 'lifestyles', body._id), body);

	console.log('Document has been added successfully');

	return { status: 200, body: { a: 'ok', DiagramId: body._id } };
};
