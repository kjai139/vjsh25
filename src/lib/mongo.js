import mongoose from 'mongoose'

const MONGO_DB = process.env.MONGO_DB

if (!MONGO_DB) {
    throw new Error('MONGO env is not defined')
}

let cached = global.mongoose


if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

export const dbConnect = async () => {
    try {
        if (cached.conn) {
            console.log(`***Existing db connection found:${mongoose.connections.length}***`)
            return cached.conn
        }

        if (!cached.promise) {
            cached.promise = mongoose.connect(MONGO_DB)
        }

        cached.conn = await cached.promise
        return cached.conn

    } catch (err) {
        console.error(err)
        throw new Error('Error connecting to db:', err?.message)
    }
}