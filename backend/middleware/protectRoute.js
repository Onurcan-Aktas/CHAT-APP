import jwt, { decode } from 'jsonwebtoken'
import User from '../models/user.model.js'

const protectRoute=async(req,res,next)=>{
    try {
        const token=req.cookies.jwt

        if(!token) res.status(400).json({error:"Unauthorized-No Token provided"}) 
        
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)

        if(!decoded) res.status(400).json({error:"Unauthorized-Invalid Token"}) 

        const user=await User.findById(decoded.userId).select("-password")

        if(!user) res.status(400).json({error:"User Not Found"}) 

        req.user=user

        next()

        
    } catch (error) {
        console.log("Error in protectRoute middleware:",error.message)
        res.status(500).json({error:"Internal server error."})
        
    }

}

export default protectRoute;