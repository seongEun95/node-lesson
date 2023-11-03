export default function urlLogger(req, res, next) {
	console.log('urlLogger');
	console.log(req.originalUrl);
	next();
}
