const { Schema, model } = require('mongoose');

const guildSchema = new Schema(
    {
        id: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = model('User', guildSchema);