const db = require('../db')

class apiController{

async getUsers (req, res){
    try{
        const users = db.query("SELECT * FROM users",function(err,results){
            if(err) console.log(err)
            else{
            res.send(results)
        }
        })
    }catch(e){
        
    }
}
    
    
async delUser (req, res){
    try {
        const id = req.params["id"];
        const sql = "DELETE FROM users WHERE id = (?)"
        db.query(sql, [id], function (err, results) {
            if (err) console.log(err);
            else console.log("User deleted");
        })
    }catch(e){
        
    }
}


async addPosts (req, res){
    try {
        const user_id = req.body.user_id;
        const post = req.body.post;
        const sql = "INSERT INTO posts(user_id, post) VALUES (?, ?)"
        db.query(sql, [user_id, post], function (err, results) {
            if (err) console.log(err);
            else console.log("Data updated");
        })
        console.log(req.body.user_id);
        console.log(req.body.post);
    } catch(e) {
       
    }
}
async getPosts (req, res){
    try{
        const users = db.query("SELECT * FROM posts",function(err,results){
            if(err) console.log(err)
            else{
            res.send(results)
        }
        })
    }catch(e){

    }
}
    


    

async addCommentsByPost (req, res){
    try{
        const post_id = req.body.post_id;
        const comment = req.body.comment;
        const sql = "INSERT INTO comments(post_id, comment) VALUES (?, ?)"
        db.query(sql, [post_id, comment], function (err, results) {
            if (err) console.log(err);
            else console.log("Data updated");
        })
    } catch(e){
        console.log(e)
    }
}
    

async getCommentsByPost (req, res){
    try {
        const post_id = req.params["post_id"];
        db.query("SELECT * FROM comments WHERE post_id = (?)", [post_id],function(err,results){
            if(err) console.log(err)
            else{
            res.send(results)
        }
        })
    } catch(e){
        console.log(e)
    }
    
}
    
    
async changeCommentsByPost (req, res){
    try {
        const post_id = req.params["post_id"];
        const newcomment = req.body.newcomment
        const sql = "UPDATE comments SET comment = (?) WHERE post_id = (?)"
        db.query(sql, [newcomment, post_id],function(err,results){
            if(err) console.log(err)
            else{
            res.send(results)
        }
        })
    } catch(e){
        console.log(e)
    }
    
}
    
    
async delComment (req, res){
    try {
        const id = req.params["id"];
        const sql = "DELETE FROM comments WHERE id = ?"
        db.query(sql, [id], function (err, results) {
            if (err) console.log(err);
            else console.log("Comment deleted");
        })
    }catch(e){
        
    }
}


async addCommentsFriends (req, res){
    try{
        const user_id = req.body.user_id;
        const friend_id = req.body.friend_id;
        const sql = "INSERT INTO friends(user_id, friend_id) VALUES (?, ?)"
        db.query(sql, [user_id, friend_id], function (err, results) {
            if (err) console.log(err);
            else console.log("Data updated");
        })
    } catch(e){
        console.log(e)
    }
}


async getFriends (req, res){
    try {
        const user_id = req.params["id"];
        db.query("SELECT * FROM friends WHERE user_id = (?)", [user_id],function(err,results){
            if(err) console.log(err)
            else{
            res.send(results)
        }
        })
    } catch(e){
        console.log(e)
    }
    
}


async delFriends (req, res){
    try {
        const user_id = req.params["id"];
        const sql = "DELETE FROM comments WHERE user_id = (?)"
        db.query(sql, [user_id], function (err, results) {
            if (err) console.log(err);
            else console.log("Comment deleted");
        })
    }catch(e){
        
    }
}
}

module.exports = new apiController()
