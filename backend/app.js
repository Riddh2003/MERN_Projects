const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(express.json());

app.use(cors());

const validateToken = require("./src/middleware/AuthMiddleware.js");
const Redis = require("ioredis")
const { Queue } = require("bullmq")

app.use((req, res, next) => {
    // const publicRoutes = ["/user/login"];
    // if (publicRoutes.includes(req.path)) {
    //     return next();
    // }
    // validateToken(req, res, next);
    next();
})

const userRoutes = require('./src/routes/UserRoutes');
app.use('/user', userRoutes);

const roleRoutes = require('./src/routes/RoleRoutes.js');
app.use('/role', roleRoutes);

const productRoutes = require('./src/routes/ProductRoutes.js');
app.use('/product', productRoutes);

const uploadRoutes = require('./src/routes/UploadRoutes.js');
app.use('/upload', uploadRoutes);

const redisConnection = new Redis({
    host: "127.0.0.1",
    port: "6379"
})

const myQueue = new Queue("taskQueue", { connection: redisConnection })

app.post("/add-job", async (req, res) => {
    const { name } = req.body;
    await myQueue.add("task", { name }, { delay: 0 })
    res.json({
        message: "Job added..."
    })
})

const fakeData = {
    1: { name: "Riddh", age: 21 },
    2: { name: "Raj", age: 23 },
    3: { name: "Ram", age: 24 },
    4: { name: "Vaibhav", age: 25 },
    5: { name: "Preet", age: 21 },
}

const CACHE_MEMORY = 600;
const cacheMemory = async (req, res, next) => {
    const { id } = req.params;
    try {
        const cacheData = await redisConnection.get(id);
        if (cacheData) {
            console.log("Data fetched...")
            res.status(200).json({
                message: "User Data...",
                data: JSON.parse(cacheData)
            })
        }
        else {
            console.log("Data not found in cache...")
            next()
        }
    } catch (err) {
        res.status(500).json({
            message: "internal server err",
            err: err
        })
    }
}

app.get('/getcachedatabyid/:id', cacheMemory, (req, res) => {
    const { id } = req.params;
    const userData = fakeData[id];
    // store in cache
    redisConnection.setex(id, CACHE_MEMORY, JSON.stringify(userData));
    res.status(200).json({
        message: "Data store in cache...",
        data: userData
    })
})

mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => {
    console.log('MongoDB Connted....')
}).catch(() => {
    console.log('MongoDB not connected....')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
