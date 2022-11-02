import firebaseApp from '../../../Egyebek/FirebaseInit';

import type { RequestHandler } from './$types';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export const POST: RequestHandler = async ({ request }) => {
	const db = getFirestore(firebaseApp);
	let docs = [];
	const querySnapshot = await getDocs(collection(db, 'lifestyles'));
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		//	console.log(doc.id, ' => ', doc.data());
		docs.push(doc.data());
	});

	return new Response(JSON.stringify({ docs }), {
		headers: {
			'content-type': 'application/json; charset=utf-8'
		}
	});
};
