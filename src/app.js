import express from 'express';
import router from './router';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 8000);

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 라우터
app.use(router);

app.get('/', (req, res) => {
	console.log('hello nodejs');
	res.status(200).send('hello nodejs');
});

app.use('/', express.static(path.join(__dirname, '../public')));

// 404 에러처리
app.use((req, res, next) => {
	res.status(404).send('404 NOT FOUND');
});

// 500 에러처리
app.use((err, req, res, next) => {
	console.log('여기 들림');
	res.status(500).send(err.message || '500 SERVER ERROR');
	console.error(err);
});

export default app;
