const PostModel = require('../models/post.model');

module.exports.getPosts = async (req, res) => {
    const posts = await PostModel.find();
    res.status(200).json(posts);
};

module.exports.setPosts = async (req, res) => {
    if(!req.body.city || !req.body.country || !req.body.minTemperature || !req.body.maxTemperature || !req.body.windSpeed){
        res.status(400).json({message: "Les champs ne sont pas tous remplis !"});
    }

    const post = await PostModel.create({
        date: req.body.date,
        city: req.body.city,
        country: req.body.country,
        minTemperature: req.body.minTemperature,
        maxTemperature: req.body.maxTemperature,
        windSpeed: req.body.windSpeed,
    });

    res.status(200).json(post);
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

module.exports.likePost = async (req, res) => {
    try {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            {$addToSet: {likers: req.body.userId}},
            {new: true}
        ).then((data) => res.status(200).send(data));
    } catch (err) {
        res.status(400).json({message: err});
    }
};

module.exports.dislikePost = async (req, res) => {
    try {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            {$pull: {likers: req.body.userId}},
            {new: true}
        ).then((data) => res.status(200).send(data));
    } catch (err) {
        res.status(400).json({message: err});
    }
};