import artistService from '../service';

export const getArtists = async (req, res, next) => {
	try {
		const result = await artistService.getArtists(req, res, next);
		res.status(200).json({ result });
	} catch (err) {
		next(err);
	}
};

export const getArtistById = async (req, res, next) => {
	try {
		const result = await artistService.getArtistById(req, res, next);
		res.status(200).json({ result });
	} catch (err) {
		next(err);
	}
};

export const createArtist = async (req, res, next) => {
	try {
		await artistService.createArtist(req, res, next);
		res.status(200).json({ result: 'success' });
	} catch (err) {
		next(err);
	}
};

export const updateArtist = async (req, res, next) => {
	try {
		await artistService.updateArtist(req, res, next);
		res.status(200).json({ result: 'success' });
	} catch (err) {
		next(err);
	}
};

export const deleteArtist = async (req, res, next) => {
	try {
		// artist = artist.filter(item => item.id !== id);
		await artistService.deleteArtist(req, res, next);
		res.status(200).json({ result: 'success' });
	} catch (err) {
		next(err);
	}
};
