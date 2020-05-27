// server.js
const User = require('./models/user.js')
app.post('/signup', User.signup)
app.post('/signin', User.signin)