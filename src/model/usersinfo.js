export class Userinfo{
    constructor(name,email,pass){
        this.name = name;
        this.email = email;
        this.pass = pass;
    }
    static addUserInfo(name,email,pass){
        let newUser = new Userinfo(name,email,pass);
        users.push(newUser);
        return newUser;
    }
    static loginUser(email,pass){
        return users.find((user)=>{
            return user.email === email && user.pass === pass;
        })
    }
}

let users = [];