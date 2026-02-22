import User from '../models/user.model.js'
export const getUsersForSideBar=async(req,res)=>{
    try {

        const loggedInUserId=req.user._id

        // if(!senderId){
        //     res.status(401).json({error:"No Invalid operation"})}

        const filteredUsers=await User.find({_id:{$ne:loggedInUserId}}).select("-password") //Bu kod bana "loggedInUserId" kullnaıcısı hariç tüm kullanıcıları bul ve getir demek
        //const notfilteredUsers=await User.find() //Bu kod bana tüm kullanıcıları bul ve getir demek

        res.status(200).json(filteredUsers)
        
        
    } catch (error) {
        console.error("Error in getUsersForSideBar:",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}