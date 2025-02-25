

export function jobDetailsValid(req,res,next){
    let {role,skills,Type} = req.body;

    let errors;

    if(role === "select Job designation"){
        errors = "Invalid Designation"
        return res.render("newjob",{errors:errors,userEmail:req.session.userEmail,userName:req.session.userName});
    }else if(skills === undefined){
        errors = "Invalid Skills"
        return res.render("newjob",{errors:errors,userEmail:req.session.userEmail,userName:req.session.userName});
    }else if(Type === "Select Job category"){
        errors = "Invalid Category";
        return res.render("newjob",{errors:errors,userEmail:req.session.userEmail,userName:req.session.userName});
    }else{
        next();
    }
}