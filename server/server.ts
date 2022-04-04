import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { userRoute } from './routes/auth';
import { personsRouter } from './routes/person';

// Create global app object
var app = express();
app.use(json());
app.use(cors());

app.listen(5000, () => {
	console.log('server is running on PORT 5000');
});

app.use('/api/', userRoute);
app.use('/api/', personsRouter);

// app.use('/api', require('./routes/auth.js'));
// app.use('/api', require('./routes/persons.js'))
