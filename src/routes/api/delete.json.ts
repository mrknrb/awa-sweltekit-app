import type { RequestHandler } from '@sveltejs/kit';
import firebaseApp from '../fb';
import { getFirestore, collection, getDocs, deleteDoc } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';

export const post: RequestHandler = async ({ request }) => {
	const db = getFirestore(firebaseApp);
	console.log(request);
	let body: string = await request.json();

	await deleteDoc(doc(db, 'lifestyles', body));
	return { status: 200, body: { a: 'ok' } };
};
