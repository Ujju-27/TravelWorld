import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next)=>{
    const token = req.cookies.accessToken;
    
    if (!token) {
        return res.status(401).json({ success: false, message: "You're not Authorized..." });   
    }

    jwt.verify(token, process.env.JWT_SECRET, (err,user)=>{
        if(err)
        {
            return res.status(401).json({
                success: false,
                message: "Token is Invalid.."
            })
        }
        req.user = user;
        next();
    });
};

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id === req.params.id || req.user.role === 'admin')
        {
            next();
        }
        else{
            return res.status(401).json({
                success: false,
                message: "Your're not Authenticated.."
            });
        }
    });
};

export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.role === 'admin')
        {
            next();
        }
        else{
            return res.status(401).json({
                success: false,
                message: "Your're not Authorized.."
            });
        }
    });
};