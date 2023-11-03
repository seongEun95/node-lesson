import { Router } from 'express';

const router = Router();

const artist = [{ id: 1, name: '아이유' }];

router //
	.route('/artist')
	.get((req, res, next) => {
		try {
			res.status(200).json({ result: artist });
		} catch (err) {
			console.error('/artist 에서 에러 발생');
			next();
		}
	});

export default router;
