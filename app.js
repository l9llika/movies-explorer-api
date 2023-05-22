const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const { errors } = require('celebrate');

const limiter = require('./middlewares/limiterMiddleware');
const errorHandler = require('./middlewares/errorMiddleware');
const reqLogger = require('./middlewares/reqLogMiddleware');
const errLogger = require('./middlewares/errLogMiddleware');

const router = require('./routes/index');
const config = require('./utils/config');

const app = express();

mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(reqLogger);
app.use(helmet());
app.use(limiter);

app.use('/', router);
app.use(errLogger);
app.use(errors());
app.use(errorHandler);

app.listen(config.PORT);