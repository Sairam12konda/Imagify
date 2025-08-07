import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/imagify`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('MongoDB connected!')
    } catch (err) {
        console.error('Error connecting to DB:', err.message)
        throw err
    }
}

export default connectDB
