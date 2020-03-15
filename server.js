// express loading
const express = require('express');
// express를 실행하는 것을 app이라고 상수화
const app = express();
const mongoose = require('mongoose');


// server.js파일에서 route를 만들어 productsRoute, ordersRoute로 상수화
const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');


const mongoDBurl = 'mongodb+srv://seolin202:tjfdls0114**@cluster0-4lqvd.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDBurl, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log('MongDB connected..'))
    .catch(err => console.log(err.message));



app.use('/products', productsRoute);
app.use('/orders', ordersRoute);

// port는 3000번
const port = 3000;
// app중의 .listen모듈을 사용, server가 작동하면 console.log를 통해 server started..라는 string을 print
app.listen(port, console.log('server started..'));