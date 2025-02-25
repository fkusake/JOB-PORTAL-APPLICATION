// External Packages :
import express from "express";
import path from "path";
import ejsLayouts from "express-ejs-layouts";
import validater from "express-validator";
import session from "express-session";

// Modules :
import landingPage from "./src/controller/landingPage.js";
import { userMod } from "./src/controller/userMod.js";
import { userAuth1 } from "./src/middlewares/userAuthentication.js";
import { userAuth2 } from "./src/middlewares/userAuthentication.js";
import { userAuth3 } from "./src/middlewares/userAuthentication.js";
import { userAuth4 } from "./src/middlewares/userAuthentication.js";
import { jobDetailsValid } from "./src/middlewares/jobDetailsvalid.js";
import { fileconfig } from "./src/middlewares/fileHandle.js";
import { ApplyUsers } from "./src/controller/ApplyUsers.js";
import mail from "./src/middlewares/mailer.js";
import cookieParser from "cookie-parser";
import cookie from "./src/middlewares/cookieCreation.js";

// Express SetUp :
const server = express();

// Ejs Configuration :
server.set("view engine","ejs");
server.set("views",path.join(path.resolve(),"src","views"));



// Application level MiddleWares or Global MiddleWares : 
server.use(express.static("src/views"));
server.use(express.static("public"));
server.use(ejsLayouts);
server.use(express.urlencoded({extended:true}));
server.use(session({
    secret:"JobPortal",
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false},
}));
server.use(cookieParser());

// Module Instances :
const interFace1 = new landingPage();
const userFunc = new userMod();
const applyUser = new ApplyUsers();



// Routes :
server.get("/",interFace1.getLandingPage);

server.get("/pagelogin",interFace1.getLoginPage);

server.get("/postedjobs",interFace1.getPostedJobs);

server.get("/logout",userFunc.getlogoutUser);

server.get("/postnewjob",cookie,userAuth1);

server.get("/updatejob/:companyName/:location/:id",cookie,userAuth2);

server.get("/jobdetails/:id",interFace1.getjobDetails);

server.get("/deletejob/:id",userAuth3,interFace1.deletejob);

server.get("/viewapplicants/:id",userAuth4,applyUser.getAppliedUsers);

server.get("/successpage",applyUser.getsuccessPage);

server.post("/newjob",jobDetailsValid,interFace1.newjob);

server.post("/jobupdated",interFace1.postUpdatedJob);

server.post("/newuser",userFunc.postUserInfo);

server.post("/userlogin",userFunc.postLoginUser);

server.post("/applyjob",fileconfig.single("file"),applyUser.postuserApply,mail);


// Server Listening :
server.listen(3000,()=>{
    console.log("Server is Listening at Port Number 3000")
})
