const mongoose = require('mongoose');
require('dotenv').config({ path: 'config.env' });

const connectDB = async () => {
    mongoose.set('strictQuery', true);
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, // Add this line to ensure compatibility with newer versions of MongoDB
            useUnifiedTopology: true // Add this line to ensure compatibility with newer versions of MongoDB
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Exit the process with a failure code
    }
}

module.exports = connectDB;
