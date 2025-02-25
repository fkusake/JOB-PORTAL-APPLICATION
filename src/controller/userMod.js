import { Userinfo } from "../model/usersinfo.js";
import { jobinfo } from "../model/jobinfo.js";


export class userMod{
    // Adding using Info :
    postUserInfo(req,res){
        let {name,email,pass} = req.body;
        let userDetails = Userinfo.addUserInfo(name,email,pass);
        return res.render("loginpage",{userEmail:req.session.userEmail,userName:req.session.userName});
    }
    
    //User Login :
    postLoginUser(req,res){
        let {email,pass} = req.body;
        const loginUserDetails = Userinfo.loginUser(email,pass);
        if(loginUserDetails === undefined){
            return res.render("errorpage")
        }else{
            let {name} = loginUserDetails;
            req.session.userEmail = email;
            req.session.userName = name;
            let jobsPosted = jobinfo.postedjobs();
            return res.render("jobcards",{jobs:jobsPosted,userEmail:req.session.userEmail,userName:req.session.userName});
        }
    }
    // Logout :
    getlogoutUser(req,res){
        res.clearCookie("dateTime");
        req.session.destroy((error)=>{
            if(error){
                console.log(error);
            }else{
                return res.redirect("/")
            }
        })
    }
}