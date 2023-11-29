import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => [
    res.send('hello world')
])

app.post('/api1', (req, res) => {
    const data = req.body.Data;
    console.log(data);
})

const port = 3000;
app.listen(port, (err) => {
    if(err) throw err;
    console.log('The server is running on port ' + port + 'That http://localhost:' + port);
});