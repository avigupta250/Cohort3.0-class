import { Content } from "../models/Content";
import { Response } from "express";
import { AuthenticatedRequest } from "../types";
import mongoose from "mongoose";

export const createContent = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const { link, title, type } = req.body;
    await Content.create({
      link,
      type,
      title: title,
      userId: req.userId,
      tags: [],
    });
   const content =await Content.find({userId:req.userId}).sort({ createdAt: -1 })
    res.json({
      message: "Content added",
      user: req.userId,
      userContent:content
    });
  } catch (error) {}
};

export const getAllContent = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = req.userId;
    const content = await Content.find({
      userId: userId,
    },
    
  ).populate("userId", ["email"]).sort({ createdAt: -1 });

    res.json({
      content,
    });
  } catch (err) {}
};

export const deleteContent = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  try {
    const contentId = req.body.contentId;

    console.log({"conetentID":contentId,
        "UserID":req.userId
    });

    await Content.deleteMany({
     _id: contentId,
      userId: req.userId,
    });

    res.json({
        message: "Deleted"
    })
  } catch (err) {}
};


