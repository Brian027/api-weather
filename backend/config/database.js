const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
        });
        console.log(`MongoDB connecté: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit();
    }
};

module.exports = connectDB;