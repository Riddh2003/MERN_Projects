const Redis = require('ioredis');
const { Worker } = require('bullmq');

const redisConnection = new Redis({
    host: "127.0.0.1",
    port: "6379",
    maxRetriesPerRequest: null
})

const worker = new Worker(
    "taskQueue",
    async (job) => {
        console.log(`Processing job for ${job.data.name}`)
        await new Promise((resolve) => setTimeout(resolve, 3000))
        console.log(`Job done for ${job.data.name}`)
    },
    { connection: redisConnection }
)

worker.on("completed", (job) => {
    console.log(`job ${job.id} completed...`)
})
worker.on("failed", (job, err) => {
    console.log(`job ${job.id} failed ${err.message}...`)
})