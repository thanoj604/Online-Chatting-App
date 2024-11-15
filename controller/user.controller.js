import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCokkie from "../jwt/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password do not Match" })
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: "User Already Exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await new User({
            fullname,
            email,
            password: hashedPassword,
        })

        await newUser.save();

        if(newUser){
            createTokenAndSaveCokkie(newUser._id, res);
            res.status(201).json({ message: "User created Successfully", newUser:{
                _id:newUser._id,
                fullname:newUser.fullname,
                email:newUser.email
            } });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong or internal server error" });
    }
}



export const login = async (req, res)=>{

    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(password, user.password);

        if(!user || !isMatch){
            return res.status(400).json({error: "Invalid Credentials"});
        }

        createTokenAndSaveCokkie(user._id, res);
        res.status(200).json({ message: "User logged in Successfully", user:{
            _id:user._id,
            fullname:user.fullname,
            email:user.email
        } });

        
    } catch (error) {

        console.log(error);
        res.status(500).json({ error: "Something went wrong or internal server error" });
        
    }

}



export const logout = async (req, res) =>{
    try {

        res.clearCookie("jwt");
        res.status(200).json({message:"User successfully logged out"});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong or internal server error" });
    }
}



export const allUsers = async (req, res) => {
    try {
        const loggedInUser = req.user._id;
        const filteredUsers = await   User.find({_id:{$ne: loggedInUser}}).select("-password");
        res.status(201).json(filteredUsers)
    } catch (error) {
        console.log("error in alluser controller" + error);
    }
}