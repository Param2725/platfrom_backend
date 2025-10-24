import connectDB from "./db/indexDB.js";
import dotenv from "dotenv";

dotenv.config({path : './env'});

connectDB();