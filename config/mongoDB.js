import mongoose from "mongoose";

const db = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://abomi_daba:t0M5fr8or9mLzxoz@mernapp.zpnw7ml.mongodb.net/?retryWrites=true&w=majority')
        console.log('Successfully connected to MongoDB')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default db