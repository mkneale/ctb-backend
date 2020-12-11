var mongoose = require('mongoose');

require('./mongodb_helper')
const User = require('../models/userSchema');

describe('User model', function() {
    it('has a user', function() {
        var user = new User({ email: 'gordi@gmail.com', password: 'password123'});
    expect(user.email).toEqual('gordi@gmail.com');
    expect(user.password).toEqual('password123');
    });
})