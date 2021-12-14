import { JWT_SECRET } from '$lib/config';
import Quiz from '$lib/quiz';
import jwt from 'jsonwebtoken';

export async function post({ body }) {
	const { username = body.name, house } = body;
	if (!username || !house) {
		return {
			status: 400
		};
	}

	const userId = Quiz.registerUser(username, house);

	// Create token
	const token = jwt.sign({ id: userId, name: username, qid: Quiz.id }, JWT_SECRET, {
		expiresIn: '4h'
	});

	return {
		body: {
			token
		}
	};
}