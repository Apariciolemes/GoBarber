import * as express from 'express';
const app = express();
import routes from './routes/index';
import './database';

app.use(express.json())
app.use('/', routes);

app.listen(3000)