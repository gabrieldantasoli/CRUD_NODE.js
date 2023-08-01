import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongo DB!!!");
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", () =>{
    console.log("Mongo DB disconnected!!!");
});

// MIDDLEWARES
app.use(cors());
app.use(cookieParser());
app.use(express.json());


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
});




/**
 *                       BACK_END
 *                   ____     ______________            *                 
 *     *            /___/|   /_____________/|                             
 *                  |   ||   |    _________|/    *                     
 *       *          |   ||   |    | |______                            
 *   *              |   ||   |    |/______/|                                          
 *       *   ___    |   ||   |________    ||         *            
 *          /  /|___|   ||    ________|   ||
 *    *    |  |_/___|   ||   /________|   ||
 *          \__________//    |____________|/    *
 * 
 * 
 *  + Developed by : GabrielDantasOli
 *  + GITHUB       : https://github.com/gabrieldantasoli
 *  + Contact      : gabriel.dantas.oliveira@ccc.ufcg.edu.br
 *  + JAVASCRIPT FOR ALL LIFE!
 * 
 * npm install -g @vercel/ncc
 * ncc build index.js -o build
 **/ 