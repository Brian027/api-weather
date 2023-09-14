const mongoose = require('mongoose');

const postShema = mongoose.Schema(
    weather = [
        {
            // Date
            date: {
                type: Date,
                default: new Date()
            },
            // City
            city: {
                type: String,
                required: true
            },
            // Country
            country: {
                type: String,
                required: true
            },
            // Weather Description
            weatherDescription: {
                type: String,
                required: true
            },
            // Min Temperature
            minTemperature: {
                type: Number,
                required: true
            },
            // Max Temperature
            maxTemperature: {
                type: Number,
                required: true
            },
            // Temperature
            temperature: {
                type: Number,
                required: true
            },
            // Wind Speed
            windSpeed: {
                type: Number,
                required: true
            },
            // Weather Indice UV
            weatherIndiceUV: {
                type: Number,
                required: true
            },
            // Weather Pressure
            weatherPressure: {
                type: Number,
                required: true
            },
        }
    ],
    {
        timestamps: true,
    }
);
const Post = mongoose.model('Post', postShema);
module.exports = Post;