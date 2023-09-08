const mongoose = require('mongoose');

const postShema = mongoose.Schema(
    data = [
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
            // Wind Speed
            windSpeed: {
                type: Number,
                required: true
            },
        }
    ],
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Post', postShema);