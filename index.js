const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const dataDemo = require('./data');
const mongoose = require('mongoose');

//uri 
const uri = 'mongodb+srv://chinhnvph23300:KTO8IVB7oWjeqhJN@cluster0.vpwjudp.mongodb.net/demo123?retryWrites=true&w=majority';

//get data in mongodb
app.get('/', async (req, res) => {
    await mongoose.connect(uri).then(console.log('Kết nối server thành công'));
    //
    let listData = await dataDemo.find();
    console.log(listData);
    res.send(listData);
})
//add data to mongodb
app.get('/add', async (req, res) => {
    await mongoose.connect(uri).then(console.log('Kết nối server thành công'));
    const data_adđ = new dataDemo({
        title:'Hello Word',
        name:'Nguyễn Văn B',
        years:1234,
    });
    let listData = await dataDemo.find();
    let kq = await data_adđ.save();
    console.log(kq);
    res.send(listData);
});
//update data to mongose
app.get('/update', async (req, res) => {
    await mongoose.connect(uri).then(console.log('kết nối db thành công'));
    try {
        const updateBaiTho = await dataDemo.findOneAndUpdate(
            { title: 'Hello Word' },//điều kiện để tiến hành update
            { years: 1900, name: 'Tran Khoa' },//các trường và giá trị cần cập nhật
            { new: true },
        );
        console.log(updateBaiTho);
        res.send(updateBaiTho);
    } catch (err) {
        console.log(err);
        res.send(err);
    }

})
//delete
app.get('/delete', async (req, res) => {
    await mongoose.connect(uri).then(console.log('kết nối db thành công'));
    try {
        const deleteBaiTho = await dataDemo.deleteOne({title:'Hello Word',});
        console.log(deleteBaiTho);
        res.send(deleteBaiTho);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})