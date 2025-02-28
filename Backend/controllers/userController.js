import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import CryptoJS from "crypto-js";



//login user
const loginUser = async (req,res)=>{
    let {email,password}=req.body;
    try {

        const secretKey = "mySecretKey";
        // ✅ Decrypt email
        // console.log("ecrypted Email:", email); // Debugging
        const bytese = CryptoJS.AES.decrypt(email, secretKey); 
        email = bytese.toString(CryptoJS.enc.Utf8);
        // console.log("Decrypted Email:", email); // Debugging

        const user =await userModel.findOne({email});
        if (!user) {
            return res.json({success:false,message:"User Doesn't exists"})
        }
            // 🔓 Decrypt password
            const bytes = CryptoJS.AES.decrypt(password, "mySecretKey");
            const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
       
          // 🔑 Compare decrypted password with hashed password
          const isMatch = await bcrypt.compare(decryptedPassword, user.password);
          
        if (!isMatch) {
            return res.json({success:false,message:"Invalid Credentials"})
        }
        const token=createToken(user._id);
        res.json({success:true,token})
       

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
      }
    }
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const registerUser = async (req,res)=>{ 
    let {name ,password,email}=req.body;
    try {

        const secretKey = "mySecretKey";
        // ✅ Decrypt email
        // console.log("ecrypted Email:", email); // Debugging
        const bytese = CryptoJS.AES.decrypt(email, secretKey); 
        email = bytese.toString(CryptoJS.enc.Utf8);
        // console.log("Decrypted Email:", email); // Debugging

        
        //checking use exits or not
        const exists=await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exists"})
        }
        // validateing email and password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please Enter a valid E-mail"})
        }
        if(password.length<8){
            return res.json({success:false,message:"Please enter a strong password"})
        }

      

         // 🔓 Decrypt password 
         const bytes = CryptoJS.AES.decrypt(password, "mySecretKey");
         const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

        //  console.log("Password hai ye :", password);
        //  console.log("Password hai jo ja rhe :", decryptedPassword); 
        //hashing user password
        const salt= await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(decryptedPassword,salt);
 

        // ✅ Debugging - Check Hashed Password
        // console.log("Hashed Password:", hashedPassword);
 
        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token= createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {loginUser,registerUser};