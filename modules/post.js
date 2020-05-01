const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
    {
        name: String,
        img: String,
        summary: String

    }
);

module.exports = mongoose.model('posts', PostSchema);