export class candidateInfo{
    constructor(jobid,name,email,phone,pdfUrl){
        this.jobid = jobid;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.pdfUrl = pdfUrl;
    }

    static viewCandidate(id){
        let jobCandidates = [];
        candidates.map((candy)=>{
            if(candy.jobid === id){
                jobCandidates.push(candy);
            }
        })
        return jobCandidates;
    }

    static cadidateInfo(jobid,name,email,phone,pdfUrl){
        let newCandidate = new candidateInfo(jobid,name,email,phone,pdfUrl);
        candidates.push(newCandidate);
    }
}


let candidates = [];