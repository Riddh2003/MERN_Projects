const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
app.use(express.json())

const userRoutes = require('./src/routes/UserRoutes');
app.use('/user', userRoutes);

const roleRoutes = require('./src/routes/RoleRoutes.js');
app.use('/role', roleRoutes);

const productRoutes = require('./src/routes/ProductRoutes.js');
app.use('/product', productRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => {
    console.log('MongoDB Connted....')
}).catch(() => {
    console.log('MongoDB not connected....')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
