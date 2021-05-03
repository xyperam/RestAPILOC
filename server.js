const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

//cY59bE61eI4WsO5F

//Routes
const postsRoutes = require('./routes/api/posts');


const app = express();

//BodyParser Middlewware
app.use(express.json());


//connect to mongodb

mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(() => console.log('MongoDB connected!'))
.catch(err => console.log(err));


app.get('/',(req,res)=>{
    res.send('Hello from node');
});

//User routes
app.use('/api/posts',postsRoutes);

const PORT = process.env.PORT||5000;

app.listen(PORT,()=>console.log(`Server run at port ${PORT}`));