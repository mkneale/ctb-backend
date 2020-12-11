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
        // const user1 = await User.findOne({email: req.body.email});
        // if (user1) {
        //     const compare = await  }
        // else{
        user.save(function(err){
            if(err) {throw err}
        });
        res.json({user: user})
    }
};

module.exports = UsersController;