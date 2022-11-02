import firebaseApp from '../../../Egyebek/FirebaseInit';

import type { RequestHandler } from './$types';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';

export const POST: RequestHandler = async ({ request }) => {
	const db = getFirestore(firebaseApp);

	let body: string = await request.json();
	//console.log(body);

	const docSnap = await getDoc(doc(db, 'lifestyles', body));
	//console.log(docSnap.data());
	//console.log(docSnap.exists());
	if (docSnap.exists()) {
		let docData = docSnap.data();
		//console.log('Document data:', docData);
		return new Response(JSON.stringify({ docData }), {
			headers: {
				'content-type': 'application/json; charset=utf-8'
			}
		});
	} else {
		// doc.data() will be undefined in this case
		return new Response(JSON.stringify({ docData }), {
			headers: {
				'content-type': 'application/json; charset=utf-8'
			}
		});
		//	console.log('No such document!');
	}
};
