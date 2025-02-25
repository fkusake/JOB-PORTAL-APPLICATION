import { text } from "express";
import nodemailer from "nodemailer";

export default async function mail(req,res,next){
    let {email} = req.body;
    console.log(email);
    let mail = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"gagan20tvl@gmail.com",
            pass:"wzem lzsy rpmn amdm",
        }
    })


    let mailContent = {
        from:"gagan20tvl@gmail.com",
        to:email,
        subject:"Easily",
        text:"Thank You For Applying!!!!!! We will get in Contact with you as Soon as Possible",
    }

    try{
        let result = await mail.sendMail(mailContent)
        console.log("Mail Sent Successfully");
        res.send();
    }catch(err){
        console.log("Mail Error :"+err);
        res.send();
    }
}