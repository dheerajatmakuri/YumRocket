import jwt from "jsonwebtoken"

const authMiddleware = async (req,res,next) => {
    const {token} = req.headers;
    if(!token) {
        return res.json({success:false,message:"Not Authorized Login again"})
        }
        try {
            const token_decode = jwt.verify(token,process.env.JWT_SECRET);
            req.body.userId = token_decode.id;
            next();
        } catch (error) {
           console.log(error);
           res.json({success:false,message:"Error"})
        }
    }
    




export default authMiddleware;



// import jwt from "jsonwebtoken";

// const authMiddleware = async (req, res, next) => {
//     const token = req.headers.authorization?.split(" ")[1]; // Extract token from 'Authorization' header
//     if (!token) {
//         return res.json({ success: false, message: "Not Authorized. Please log in again." });
//     }
//     try {
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//         req.body.userId = token_decode.id;
//         next();
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Invalid or expired token. Please log in again." });
//     }
// };

// export default authMiddleware;
