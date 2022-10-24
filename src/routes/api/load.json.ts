import type { RequestHandler } from '@sveltejs/kit';
import firebaseApp from '../fb';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';

export const post: RequestHandler = async ({ request }) => {
	const db = getFirestore(firebaseApp);

	let body: string = await request.json();
	console.log(body);

	const docSnap = await getDoc(doc(db, 'lifestyles', body));
	console.log(docSnap.data());
	console.log(docSnap.exists());
	if (docSnap.exists()) {
		let docData = docSnap.data();
		//console.log('Document data:', docData);
		return { status: 200, body: { a: 'ok', docData } };
	} else {
		// doc.data() will be undefined in this case
		return { status: 404, body: { a: 'ok', body } };
		//	console.log('No such document!');
	}
};
