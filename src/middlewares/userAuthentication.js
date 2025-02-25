

export function userAuth2(req,res,next){
    if(req.session.userEmail){
        let companyName = req.params.companyName;
        let location = req.params.location;
        let id = req.params.id;
        return res.render("updatejob",{userEmail:req.session.userEmail,userName:req.session.userName,errors:null,companyName:companyName,location:location,id:id});
    }else{
        return res.render("errorpage");
    }
}

export function userAuth1(req,res,next){
    if(req.session.userEmail){
        return res.render("newjob",{userEmail:req.session.userEmail,userName:req.session.userName,errors:null});
    }else{
        return res.render("errorpage");
    }
}

export function userAuth3(req,res,next){
    if(req.session.userEmail){
       next();
    }else{
        return res.render("errorpage");
    }
}

export function userAuth4(req,res,next){
    if(req.session.userEmail){
       next();
    }else{
        return res.render("recruiterOnly");
    }
}