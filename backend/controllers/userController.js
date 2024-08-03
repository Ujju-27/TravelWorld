import User  from '../models/User.js';

//create new user
export const createUsers = async(req,res)=>{
    const newUser = new User(req.body);
    try {
        const savedUser= await newUser.save()
        res.status(200).json({success: true, message: "Successfully Created",
        data: savedUser,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to Create. Try again!"});
    }
};

//update user
export const updateUsers = async(req,res)=>{
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id,{
            $set: req.body
        },{ new: true})
        res.status(200).json({success: true, message: "Successfully Updated",
        data: updatedUser,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to Update. Try again!"});
    }
};

//delete user
export const deleteUsers = async(req,res)=>{
    const id = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(id,{
            $set: req.body
        },{ new: true})
        res.status(200).json({success: true, message: "Successfully Deleted",
        data: deletedUser,
        });
    } catch (err) {
        res.status(500).json({ success:false, message: "Failed to Delete. Try again!"});
    }
};


//get single user
export const getsingleUsers = async(req,res)=>{
    const id = req.params.id;
    try {
        const users = await User.findById(id)
        res.status(200).json({success: true, message: "Successfully Getting User",
        data: users,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not Found Any User..."});
    }
};

//get All users
export const getAllUsers = async(req,res)=>{
    try {
        const users = await User.find({})
        res.status(200).json({success: true, message: "Successfully Getting Users",
        data: users,
        });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not Found Any User..."});
    }
};