const Post = require('../models/post.model');

module.exports.getPosts = async (req, res) => {
    const posts = await PostModel.find();
    res.status(200).json(posts);
};

module.exports.setPosts = async (req, res) => {
    
    const post = new Post(
        req.body
    )
    try {
        await post.save();
        res.status(201).send(post);
    } catch (error) {
        res.status(400).send(error)
    }
};

module.exports.editPost = async (req, res) => {
    const post = await PostModel.findById(req.params.id);

    if(!post){
        res.status(400).json({message: "Le post n'existe pas"});
    }

    const updatePost = await PostModel.findByIdAndUpdate(
        post,
        req.body,
        {new: true},
    )

    res.status(200).json(updatePost);
};

module.exports.deletePost = async (req, res) => {
    const post = await PostModel.findById(req.params.id);

    if(!post){
        res.status(400).json({message: "Le post n'existe pas"});
    }

    await PostModel.findByIdAndDelete(req.params.id);

    res.status(200).json({message: "Le post a été supprimé"});
};