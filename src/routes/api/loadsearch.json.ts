import type { RequestHandler } from '@sveltejs/kit';
import firebaseApp from '../fb';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export const post: RequestHandler = async ({ request }) => {
	const db = getFirestore(firebaseApp);
	let docs = [];
	const querySnapshot = await getDocs(collection(db, 'lifestyles'));
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		console.log(doc.id, ' => ', doc.data());
		docs.push(doc.data());
	});

	return { status: 200, body: { a: 'ok', docs } };
};
