import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import prisma from './prisma';

const router = Router();

let artist = [
	{ id: uuid(), name: '아이유', age: '28' },
	{ id: uuid(), name: '하니', age: '19' },
	{ id: uuid(), name: '권은비', age: '28' },
];

router //
	.route('/artist')
	.get(async (req, res, next) => {
		try {
			// throw new Error('예상치 못한 에러');
			// const result = artist;
			const result = await prisma.artists.findMany();

			res.status(200).json({ result });
		} catch (err) {
			next(err);
		}
	});

router //
	.route('/artist/:id')
	.get(async (req, res, next) => {
		try {
			const { id } = req.params;

			// const result = artist.find(item => item.id === id);
			const result = await prisma.artists.findUnique({ where: { id: +id } });

			res.status(200).json({ result });
		} catch (err) {
			next(err);
		}
	});

router //
	.route('/artist')
	.post(async (req, res, next) => {
		try {
			const { name, age } = req.body;

			// const result = { id: uuid(), name, age };
			// artist.push(result);
			await prisma.artists.create({ data: { name, age } });

			res.status(200).json({ result: 'success' });
		} catch (err) {
			console.error(err);
			next({});
		}
	});

router //
	.route('/artist/:id')
	.patch(async (req, res, next) => {
		try {
			const { id } = req.params;
			const { name, age } = req.body;

			// artist = artist.map(item => (item.id === id ? { ...item, name, age } : item));
			await prisma.artists.update({ where: { id: +id }, data: { name, age } });

			res.status(200).json({ result: 'success' });
		} catch (err) {
			next();
		}
	});

router //
	.route('/artist/:id')
	.delete(async (req, res, next) => {
		try {
			const { id } = req.params;

			// artist = artist.filter(item => item.id !== id);
			await prisma.artists.delete({ where: { id: +id } });

			res.status(200).json({ result: 'success' });
		} catch (err) {
			console.error(err);
		}
	});

export default router;
