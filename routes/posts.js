const express = require('express');

const router = express.Router();

const Post = require('../modules/post');
//all post
router.get('/', async(req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});
//add post
router.post('/', (req, res) => {
    const post = new Post({
        name: req.body.name,
        img: req.body.img,
        summary: req.body.summary
    });
    post.save()
    .then(data =>{res.json(data);})
    .catch(err => {
         res.json({ message: err});
        })
});
//specific post
router.get('/:postId', async(req, res) => {
    try{
        const posts = await Post.findById(req.params.postId);
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});
//delete post 
router.delete('/:postId', async(req, res) => {
    try{
        const removePost =await Post.remove({_id: req.params.postId});
        res.json(removePost);
    }catch(err){
        res.json({message: err});
    }
});
//update post 
router.patch('/:postId', async(req, res) => {
    try{
        const updatePost =await Post.updateOne({_id: req.params.postId}, {$set: {
            name: req.body.name, 
            img: req.body.img,
            summary: req.body.summary
        }});
        res.json(updatePost);
    }catch(err){
        res.json({message: err});
    }
})

module.exports = router;
