import firebaseApp from '../../../Egyebek/FirebaseInit';

import type { RequestHandler } from '@sveltejs/kit';
import { getFirestore,  deleteDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';

export const POST: RequestHandler = async ({ request }) => {
	const db = getFirestore(firebaseApp);
	console.log(request);
	let body: string = await request.json();

	await deleteDoc(doc(db, 'lifestyles', body));
	return new Response(JSON.stringify({ a: 'ok' }), {
		headers: {
			'content-type': 'application/json; charset=utf-8'
		}
	});
};
