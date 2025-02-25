import path from "path";
import { Userinfo } from "../model/usersinfo.js";
import { jobinfo } from "../model/jobinfo.js";
import { candidateInfo } from "../model/candidateinfo.js";

export default class landingPage{

// LandingPage Handler :
getLandingPage(req,res){
    return res.render("landingPage",{userEmail:req.session.userEmail,userName:req.session.userName})
}
// Get Login Page :
getLoginPage(req,res){
    return res.render("loginpage");
}

// Get posted Jobs :
getPostedJobs(req,res){
    let jobsPosted = jobinfo.postedjobs();
    return res.render("jobcards",{jobs:jobsPosted,userEmail:req.session.userEmail,userName:req.session.userName});
}
// Get Update Form
getupdateform(req,res){
    return res.render("updatejob")
}

// Get Job Details
getjobDetails(req,res){
    let id = req.params.id;
    let jobDetails = jobinfo.postJobDetails(id);
    let numofApplicants = candidateInfo. viewCandidate(id);
    if(jobDetails == undefined){
        return res.render("errorpage");
    }else{
        return res.render("jobDetails",{jobD:jobDetails,userEmail:req.session.userEmail,userName:req.session.userName,id:id,numofApplicants:numofApplicants.length});
    }
}

// Post new Job
newjob(req,res){
    let{datetime,company,role,location,salary,skills,date,position} = req.body;
    jobinfo.postnewjob(company,role,location,salary,skills,date,position,datetime);
    return res.redirect("/postedjobs");
}


// Post Updated Job
postUpdatedJob(req,res){
    let {id,Type,role,location,company,salary,position,skills,date,datetime} = req.body;
    jobinfo.updatejob(id,Type,role,location,company,salary,position,skills,date,datetime);
    return res.redirect("/postedjobs");
}


// Deletejob 
deletejob(req,res){
    let id = req.params.id;
    jobinfo.deleteJob(id);
    return res.redirect("/postedjobs");
}
}