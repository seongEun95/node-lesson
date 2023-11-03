import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import urlLogger from './middleware/urlLogger';
import morgan from 'morgan';
import router from './router';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 8000);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// 라우터
// app.get('/', urlLogger, (req, res) => {
// 	// throw new Error();
// 	console.log('hello nodejs server');
// 	res.status(200).send('hello nodejs client');
// });
app.use(router);

app.use('/', express.static(path.join(__dirname, '../public')));

// 404 에러처리
app.use((req, res, next) => {
	res.status(404).send('404 NOT FOUND');
});

// 500 에러처리
app.use((err, req, res, next) => {
	res.status(500).send(err.message || '500 SERVER ERROR');
	console.error(err);
});

export default app;
