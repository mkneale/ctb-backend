const bcrypt = require('bcrypt');
var User = require('../models/userSchema');

// const saltRounds = 10;

var UsersController = {

    Create: async function(req, res) {
        const hashedPassword = bcrypt.hashSync(req.body.password,10);
        var user = new User({
            email: req.body.email,
            password: hashedPassword,
        });

        user.save(function(err){
            if(err) {throw err}
        });
        res.json({user: user})
    },

    Login: async function(req, res) {
        try {
        const user = await User.findOne({email: req.body.email});
        if (user){
            const cmp = await bcrypt.compare(req.body.password, user.password);
            if (cmp){
                res.json(user)
            } else{
                res.send("Wrong username or password");
            }
        } else {
        res.send("Wrong username or password.");
        }
        } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server error Occured");
        }
      },

    Exist: async function(req, res) {
      try {
        const email = await User.findOne({email: req.body.email});
        if (email) {
          res.json({status: 'unavailable'})
        } else {
          res.json({status: 'available'})
        }
      }catch (error) {
      console.log(error);
      res.status(500).send("Internal Server error Occured");
      }
    },

    Find:  function(req, res){
      const userName = req.params.userName;
      User.find({email: userName}, function(err, user) {
        if (err) { throw err; }

        res.json({userId: user[0]._id});
      });
    }

};

module.exports = UsersController;
