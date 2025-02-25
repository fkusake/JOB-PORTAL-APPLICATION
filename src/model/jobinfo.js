export class jobinfo{
    constructor(id,companyName,role,location,salary,skills,applydate,position,datetime){
        this.id = id;
        this.companyName = companyName;
        this.role = role;
        this.location = location;
        this.salary = salary;
        this.skills = skills;
        this.applydate = applydate;
        this.position = position;
        this.jobposteddate = datetime;
    }
    static postedjobs(){
        return jobs;
    }
    static postnewjob(company,role,location,salary,skills,date,position,datetime){
        let newJob = new jobinfo(jobs.length + 1,company,role,location,salary,skills,date,position,datetime);
        jobs.push(newJob);
    }
    static postJobDetails(id){
        let jobId = Number(id) 
       let jobDetails = jobs.find((job)=>{
            return job.id === jobId;
        })
        return jobDetails;
    }
    static updatejob(id,Type,role,location,company,salary,position,skills,date,datetime){
        let updatedjob = new jobinfo(Number(id),company,role,location,salary,skills,date,position,datetime);
        let index = jobs.findIndex((job)=>{
            return job.id === Number(id); 
        })
        jobs[index] = updatedjob;
    }
    static deleteJob(id){
        let index =jobs.findIndex((job)=>{
            return job.id === Number(id);
        })
        jobs.splice(index,1);
    }
}

let jobs = [
    new jobinfo(1,"IBM","Tech SDE","Gurgaon HR IND Remote","14-20",["React.js","Node.js","JS","SQL","MongoDB"],"2025-03-11","3","2024-07-DEC"),
    new jobinfo(2,"TATA","Testing","Bangalore HR IND Remote","5-6",["JAVA","JS","SQL"],"2025-03-11","2","2024-07-NOV"),
    new jobinfo(3,"WIPRO","Java Developer","pune HR Hybrid","5-7",["JAVA","React.js","Node.js"],"2025-03-11","1","2024-07-DEC"),
    new jobinfo(4,"EY","MERN Developer","Bangalore HR Remote","8-9",["JS","Express.js","Node.js","SQL","MongoDB","React.js"],"2025-03-11","5","2024-07-OCT"),
    new jobinfo(5,"INTEL","MEAN Developer","Mumbai HR Hybrid","8-9",["Express.js","React.js"],"2025-03-11","6","2024-07-SEP"),
]