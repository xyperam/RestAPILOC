const express = require('express');
const router = express.Router();

//post model
const Posts = require('../../models/Posts');


//@routes GET api/posts
//@decs GET all post

router.get('/',async(req,res)=>{
    try{
        const posts = await Posts.find();
        if(!posts) throw Error('No items');
        res.status(200).json(posts);
    }
    catch(err){
        res.status(400).json({msg:err})
    }
});


//@routes POST api/posts
//@decs Create an post

router.post('/',async(req,res)=>{
const newPost = new Posts(req.body);

try {
    const post = await newPost.save();
    if(!post) throw Error('Something wrong while saving the post');

    res.status(200).json(post);

} catch (error) {
    res.status(400).json({msg:err})
}

});

//@routes DELETE api/posts/:id
//@decs delete an post

router.delete('/:id',async(req,res)=>{
    try{
        const posts = await Posts.findByIdAndDelete(req.params.id);
        if(!posts) throw Error('No post found');
        res.status(200).json({success: true});
    }
    catch(err){
        res.status(400).json({msg:err})
    }
});

//@routes Update api/posts/:id
//@decs update an post

router.patch('/:id',async(req,res)=>{
    try{
        const posts = await Posts.findByIdAndUpdate(req.params.id,req.body);
        if(!posts) throw Error('No post found');
        res.status(200).json({success: true});
    }
    catch(err){
        res.status(400).json({msg:err})
    }
});

//@routes GET api/posts
//@decs GET an post

router.get('/:id',async(req,res)=>{
    try{
        const post = await Posts.findById(req.params.id);
        if(!post) throw Error('No items');
        res.status(200).json(post);
    }
    catch(err){
        res.status(400).json({msg:err})
    }
});





module.exports = router;