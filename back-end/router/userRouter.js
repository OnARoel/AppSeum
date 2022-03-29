import express from 'express';
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { generateToken, isAuth, isAdmin } from '../utils.js';

const userRouter = express.Router();
userRouter.use(express.urlencoded({ extended: true })); // new way after Express 4.16


//get userName for item database storage

// findById
userRouter.get(
  '/findById/:id',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send({
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user),
        image: user.image,
        company: user.company
      });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

// sign in 
userRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send({
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user),
            company: user.company
          });
          return;
        }
      }
      res.status(401).send({ message: 'Invalid email or password' });
    })
  );

// create account
  userRouter.post(
    '/register',
    expressAsyncHandler(async (req, res) => {
     // console.log("========="+req.body.image);
      const user = await User.findOne({ email: req.body.email });
      if(user){
        res.status(404).send({ message: 'Email already registered' });
      }else{
        const user = new User({
          username: req.body.username,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 8),
          isAdmin: req.body.isAdmin,
          image: req.body.image,
          company: req.body.company
        });
        const createdUser = await user.save();
        res.send({
          _id: createdUser._id,
          username: createdUser.username,
          email: createdUser.email,
          isAdmin: createdUser.isAdmin,
          token: generateToken(createdUser),
          image: createdUser.image,
          company: createdUser.createdUser
        });
      }
      
    })
  );

  // only admin can edit account, right not include password
  userRouter.put(
    '/editById/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (user) {
        user.company = req.body.company || user.company;
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;
        user.isAdmin = Boolean(req.body.isAdmin) || user.isAdmin;
        const updatedUser = await user.save();
        res.send({ message: 'User Updated', user: updatedUser });
      } else {
        res.status(404).send({ message: 'User Not Found' });
      }
    })
  );

  // only admin can delete account; admin cannot delete admin account
  userRouter.delete(
    '/deleteById/:id',
    //isAuth,
    //isAdmin,
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (user) {
        if (user.isAdmin == true) {
          res.status(400).send({ message: 'Can Not Delete Admin account' });
          return;
        }
        const deleteUser = await user.remove();
        res.send({ message: 'User Deleted', user: deleteUser });
      } else {
        res.status(404).send({ message: 'User Not Found' });
      }
    })
  );

  // only admin can view all the accounts
  userRouter.post(
    '/',
   // isAuth,
  //  isAdmin,
    expressAsyncHandler(async (req, res) => {
      const users = await User.find({company: req.body.company});
      res.send(users);
    })
  );

  // users can edit their own information, including password
  userRouter.put(
    '/profile',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.user._id); // where get req.user? from Token?
      if (user) {
        user.company = req.body.company || user.company;
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;
        if (req.body.password && req.body.password!="") {
          user.password = bcrypt.hashSync(req.body.password, 8);
        }
        user.image = req.body.image;
        const updatedUser = await user.save();
        res.send({
          _id: updatedUser._id,
          username: updatedUser.username,
          email: updatedUser.email,
          isAdmin: updatedUser.isAdmin,
          token: generateToken(updatedUser),
          company: updatedUser.company
        });
      }
    })
  );
export default userRouter;

