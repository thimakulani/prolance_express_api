const app = require('express')();
const port = 8080;

app.listen(port, ()=>console.log('live'))
app.get('/user', (req,res)=>{
    res.status('200').send('Hi');
})