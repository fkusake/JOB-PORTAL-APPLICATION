import { candidateInfo } from "../model/candidateinfo.js";


export class ApplyUsers{
    // Get Applied Users :
    getAppliedUsers(req,res){
        let jobid = req.params.id;
        let candidates = candidateInfo.viewCandidate(jobid);
        return res.render("candidates",{candy:candidates,userEmail:req.session.userEmail,userName:req.session.userName});
    }

    // Get success page :
    getsuccessPage(req,res){
        return res.render("succesPage",{userEmail:req.session.userEmail,userName:req.session.userName});
    }
    // JOB Apply Users :
    postuserApply(req,res,next){
        let{jobid,name,email,phone} = req.body; 
        let pdfUrl = "pdf/"+ req.file.filename;
        candidateInfo.cadidateInfo(jobid,name,email,phone,pdfUrl);
        res.redirect("/successpage");
        next();
    }
}