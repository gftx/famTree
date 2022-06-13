import 'dotenv/config'
import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';

import { userRoute } from './routes/auth';
import { personsRouter } from './routes/person';
import * as path from "path";

// init database
require('./config')

// Create global app object
const app = express();
app.use(json());
app.use(cors({
	origin: true,
	methods: ["GET", "POST", "PUT", "DELETE"],
	credentials: true,
}));
app.use('/', express.static(path.join(__dirname, '/')));

const PORT = 4000

app.listen(PORT, () => {
	console.log(`server is running on PORT ${PORT}`);
});

app.use('/api/', userRoute);
app.use('/api/', personsRouter);

// app.use('/api', require('./routes/auth.js'));
// app.use('/api', require('./routes/persons.js'))
