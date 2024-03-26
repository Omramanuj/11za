import { User } from './userModel.js';
import jwt from 'jsonwebtoken';

const createJWTToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY , { expiresIn: '3d' });
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const loggedInUser = await User.login(email, password)
        const token = createJWTToken(loggedInUser._id);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const signupUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = await User.signup(email, password);
        await User.findByIdAndUpdate(newUser._id, {name})
        const token = createJWTToken(newUser._id);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
