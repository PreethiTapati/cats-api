import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import dotenv from 'dotenv';

import logger from './middleware/logger.js';
import catRoutes from './routes/cat.js';

dotenv.config();

const PORT = process.env.PORT || 3005;

const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

const app = express();

app.use(logger);

// set template engine
app.set('view engine', 'ejs');
app.set('views', path.join(PATH, 'views'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(catRoutes);
// serve static folder
app.use(express.static(path.join(PATH, 'public')));

// handle error
app.use('/', (req, res) => {
    res.render('404', {
        title: 'Page not found',
        message: `This page was not found`
    });
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});