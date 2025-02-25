
export default function cookie(req,res,next){
    if(req.cookies.dateTime){
        res.locals.dateTime = req.cookies.dateTime;
    }
    let stow = Date();
    let dT = stow.slice(4,15);
    res.cookie("dateTime",dT);
    next();
}