const db = require('../db')


class AuthController {
    async registration (req, res) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const sql = "INSERT INTO users(email, password) VALUES (?, ?)"
            db.query(sql, [email, password], function (err, results) {
                if (err) console.log(err);
                else console.log("Data updated");
            })
            console.log(req.body);
            console.log(req.body.email);
        } catch(e) {
           
        }
    }
    async login (req, res) {
        try{
          
            
        }
        catch (e){
        
        }
    }

  

    

}

module.exports = new AuthController()

