const Post = require('..//models/post')
class PostController {
    //[POST] api/post/store
    async store(req, res) {
        res.status(200).json('store');
    }
    // [GET] api/post/posts
    async posts(req, res) {
        res.status(200).json('list post');
    }
    // [GET] api/me/mypost
    async myPosts(req, res) {
        res.status(200).json('my post');
    }
}
module.exports = new PostController();