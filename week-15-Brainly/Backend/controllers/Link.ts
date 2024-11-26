import { AuthenticatedRequest } from "../types";
import { v4 as uuidv4 } from 'uuid';


import { Response } from "express";
import {Link} from "../models/Link"
import { Content } from "../models/Content";




export const createLink=async(req:AuthenticatedRequest,res:Response):Promise<void>=>{
    try{

        const share=req.body.share;


        if(share){


            const existingLink = await Link.findOne({
                userId: req.userId
            });

            if (existingLink) {
                
                    res.json({
                             hashId:existingLink.hash
                    })
                
            }
            const randomUUID = uuidv4();
            console.log(randomUUID);

            await Link.create({
                hash:randomUUID,
                userId:req.userId
            })

            res.json({
                hash:randomUUID,
                user:req.userId
            })

        } else {
            await Link.deleteOne({
                userId: req.userId
            });
    
            res.json({
                message: "Removed link"
            })
        }

    }catch(err){

    }
}

export const shareLink=async(req:AuthenticatedRequest,res:Response):Promise<void>=>{
    try{



        console.log(req.params)

        
        const hash=req.params.shareLink;
        console.log("hash",hash)

        const link=await Link.findOne({hash:hash})
        console.log("Link",link)
        if (!link) {
            res.status(411).json({
                message: "Sorry incorrect input"
            })
            return;
        }

        const content=await Content.find({
            userId:link?.userId
        }).populate("userId");


        res.json({
            content
        })

    }catch(err){

    }
}