import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req,res) => {
    res.status(200).json({
        message:"coding ni hori"
    })
    console.log("User router loaded");
})


export {registerUser}