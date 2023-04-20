const http=require('http');
const app=require('./app');
require('dotenv').config()
const port = process.env.PORT

const server=http.createServer(app);
server.listen(port,()=>{
    console.log(`Gateway server is running on ${port}`);
});

app.get('/',(req,res)=>{
    res.send("Hello world")
})