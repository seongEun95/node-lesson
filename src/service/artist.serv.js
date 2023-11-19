import prisma from '../prisma';

export const getArtists = async (req, res, next) => {
	try {
		// throw new Error('예상치 못한 에러');
		// const result = artist;
		const result = await prisma.artists.findMany();

		return result;
	} catch (err) {
		next(err);
	}
};

export const getArtistById = async (req, res, next) => {
	try {
		const { id } = req.params;

		// const result = artist.find(item => item.id === id);
		const result = await prisma.artists.findUnique({ where: { id: +id } });

		return result;
	} catch (err) {
		next(err);
	}
};

export const createArtist = async (req, res, next) => {
	try {
		const { name, age } = req.body;

		// const result = { id: uuid(), name, age };
		// artist.push(result);
		await prisma.artists.create({ data: { name, age } });
	} catch (err) {
		next(err);
	}
};

export const updateArtist = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { name, age } = req.body;

		// artist = artist.map(item => (item.id === id ? { ...item, name, age } : item));
		await prisma.artists.update({ where: { id: +id }, data: { name, age } });
	} catch (err) {
		next(err);
	}
};

export const deleteArtist = async (req, res, next) => {
	try {
		const { id } = req.params;

		// artist = artist.filter(item => item.id !== id);
		await prisma.artists.delete({ where: { id: +id } });
	} catch (err) {
		next(err);
	}
};
