const express = require('express');
const indexController = require('./controllers/indexController.js');
const registerController = require('./controllers/registerController.js');
const loginController = require('./controllers/loginController.js');
const profileController = require('./controllers/profileController.js');
const successController = require('./controllers/successController.js');
const aboutController = require('./controllers/aboutController.js');
const userController = require('./controllers/userController.js');
const postController = require('./controllers/postController.js');
const editprofileController = require('./controllers/editprofileController.js');
const logoutController = require('./controllers/logoutController.js');
const app = express();

app.get('/', indexController.getIndex);
app.get('/register', registerController.getRegister);
app.get('/login', loginController.getLogin);
app.get('/profile/:username', profileController.getProfile);
app.get('/success', successController.getSuccess);
app.get('/about', aboutController.getAbout);
app.get('/user/:username', userController.getUser);
app.get('/post/:username', postController.getPost);
app.get('/logout', logoutController.getLogOut)
app.post('/register', registerController.postRegister);
app.post('/login', loginController.postLogin);
app.post('/profile', profileController.postProfile);
app.post('/post', postController.postPost);
app.get('/checkUsername', registerController.checkUsername);
app.get('/checkEmail', registerController.checkEmail);
app.get('/editname', editprofileController.getEditname);
app.post('/editname', editprofileController.postEditname)
app.get('/editemail', editprofileController.getEditemail);
app.post('/editemail', editprofileController.postEditemail)
app.get('/editpassword', editprofileController.getEditpassword);
app.post('/editpassword', editprofileController.postEditpassword);
module.exports = app;