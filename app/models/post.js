const slug = require('slug')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    name: String,
    image: String,
    slug: { type: String, slug: 'name', unique: true }
}, { timestamp: true })

// Post.plugin(mongoose_delete, {
//     // overrideMethods: ['count', 'findOneAndUpdate', 'update'],
//     deletedAt: true
// });
// Post.plugin(mongoosePaginate);
module.exports = mongoose.model('Post', Post)
