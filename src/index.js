import { app } from "./app.js";
import connectDB from "./db/indexDB.js";
import dotenv from "dotenv";

dotenv.config({path : './env'});

app.on("Error", (error) => {
    console.log("ERROR : ", error);
    throw error;
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at PORT : ${process.env.PORT}`);
    })
}).catch((err) => {
    console.log("MongoDB connection Failed !!!", err);
})