import express from 'express';
const app = express();
import data from './data.js'



const port = process.env.PORT || 5000;

app.get('/api/products', (req, res) => {
    res.send(data.products);
})
app.get('/', (req, res) => {

    res.send('server is ready');
    
});

app.listen(port, (req, res) =>{
    console.log('server is running');
})
