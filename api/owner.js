// Setup Sign up and Login API for Owner
import express from 'express'
import prisma from './lib/index.js';
import bcrypt from 'bcrypt' 
import jwt from 'jsonwebtoken';
import 'dotenv/config';
const SECRET_KEY= process.env.SECRET_KEY;
const router = express.Router();
// owner signUp 
router.post('/signup', async (req, res) => {
    const {name, email, password} = req.body

    try {

        const existingOwner = await prisma.owner.findUnique({
            where: {
                email: email,
            }
        })

        if(existingOwner) {
            return res.status(409).json({status: 409, message: "Owner already exists"})
        }

        const hashePassword = await bcrypt.hash(password, 10)

        const newOwner = await prisma.owner.create({
            data: {
                name: name,
                email: email,
                password: hashePassword
            }
        })

        res.status(201).json({status: 201, message: "Owner created successFully", newOwner})

    } catch (error) {
        res.status(500).json({status: 500, message: "Something went wrong", error: error.message})
    }
})

// owner login
router.post("/login", async(req,res)=>{
    const {email,password}= req.body();
    try {
        const existingOwner = await prisma.owner.findUnique({
            where:{
                email: email
            }
        })
        if (!existingOwner){
            return res.status(404).json({
                message: 'Owner not found',
            })
        }
        // check if the password is correct
        const isPasswordCorrect = await bcrypt.compare(password, existingOwner.password);
        if (!isPasswordCorrect){
            return res.status(401).json({
                message:"Invalid password"
            })
        }
        // create s token

        const token =jwt.sign(
            {id:existingOwner.id, email:existingOwner.email},
        SECRET_KEY,
        {expiresIn:"1h"}
            
            
           )
            return res.status(200).json({
                message:"Owner logged successfully",
                token:token,
            });

    } catch (error) {
        return res.status(500).json({message: "something went wrong", error: error});
        
    }
})


export default router;
