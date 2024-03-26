import express from 'express';
const router = express.Router({mergeParams: true});
import {loginUser,signupUser} from './userController.js';
import { User } from './userModel.js';
import { verifyUserToken } from './middleware.js';

router
    .route('/login') 
    .post((req, res) => {
        loginUser(req, res);
    })
    .get( verifyUserToken , async (req, res) => {
    if(!req.user){
        return res.status(401).send('Unauthorized');
    }
    const currUser = await User.findById(req.user.id);
    res.json({name: currUser?.name, email: currUser?.email});
    });

// Route to handle user signup
router.post('/signup', (req, res) => {
    signupUser(req, res);
});



export default router;
