
const registermodel=require("../models/authmodel")
const bcrpyt=require("bcrypt")

exports.Regcontroller=async (req,res)=>{
    try {
        const { username, password,country, email,contact } = req.body;
        const hash=bcrpyt.hashSync(req.body.password,10)
        if (!username) {
            return res.send({ error: "Name is Required" });
          }
          if (!password) {
            return res.send({ error: "Name is Required" });
          }
          if (!country) {
            return res.send({ error: "Name is Required" });
          }
          if (!email) {
            return res.send({ error: "Name is Required" });
          }
          if (!contact) {
            return res.send({ error: "Name is Required" });
          }
    
        const newUser= await new registermodel({
            ...req.body,
            password:hash
        }).save();
      
        // await newUser.save();
        res.status(201).send(newUser)
        
    } catch (error) {
        res.status(404).send("error while regsitering")
        
    }
}
