import { Router } from 'express';
// import { v4 as uuid } from 'uuid';
import artistController from './controller';

const router = Router();

// let artist = [
// 	{ id: uuid(), name: '아이유', age: '28' },
// 	{ id: uuid(), name: '하니', age: '19' },
// 	{ id: uuid(), name: '권은비', age: '28' },
// ];

router //
	.route('/artist')
	.get(artistController.getArtists);

router //
	.route('/artist/:id')
	.get(artistController.getArtistById);

router //
	.route('/artist')
	.post(artistController.createArtist);

router //
	.route('/artist/:id')
	.patch(artistController.updateArtist);

router //
	.route('/artist/:id')
	.delete(artistController.deleteArtist);

export default router;
