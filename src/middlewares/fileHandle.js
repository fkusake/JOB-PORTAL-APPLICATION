import multer from "multer";

let store = multer.diskStorage({
    destination:((req,file,cb)=>{
        cb(null,"public/pdf");
    }),
    filename:((req,file,cb)=>{
        let fileName = Date.now()+"-"+file.originalname;
        cb(null,fileName);
    })
})

export let fileconfig = multer({storage:store})