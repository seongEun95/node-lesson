import app from './app';

try {
	app.listen(app.get('port'), () => {
		console.log(`${app.get('port')}번 포트에 서버가 열렸어요~!`);
	});
} catch (err) {
	console.error(err);
}
