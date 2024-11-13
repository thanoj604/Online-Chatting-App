import jwt from "jsonwebtoken";

const createTokenAndSaveCokkie = (userId, res)=>{
    const token = jwt.sign({userId}, process.env.JWT_TOKEN);

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict"
    });
};

export default createTokenAndSaveCokkie;