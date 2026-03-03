// import express from "express";
// const app= express();
// import {createServer} from "node:http";  //connect node and socket

// import {Server} from "socket.io";

// import mongoose from "mongoose";
// import connectToSocket from "./controllers/socketmanager.js";

// import cors from "cors";
// app.use(cors()); // add this before routes

// import userRoutes from "./routes/users.routes.js";



// const server = createServer(app);
// const io = connectToSocket(server);


// //port app se hi lena h
// app.set("port",(process.env.PORT || 8080))
// app.use(express.json({limit:"40kb"}));  //Frontend se JSON data aata hai
// app.use(express.urlencoded({limit:"40kb" , extended : true})); //extended: true = complex data bhi accept karega

// app.use("/api/v1/users" , userRoutes);
// //app.use("/api/v2/users" ,newUserRoutes);

// // const start = async()=>{
// //     const connectionDB = await mongoose.connect("mongodb+srv://gaurichauhan915_db_user:gauri18@cluster0.fznc69s.mongodb.net/");
// //     console.log(connectionDB.connection.host);
// //     server.listen(app.get("port"),()=>{
// //        console.log(`Listening on port ${app.get("port")}`);

// //     });
// //}

// const start = async () => {
//   try {
//     const connectionDB = 
//   await mongoose.connect("mongodb://127.0.0.1:27017/vc");
    
 

//     console.log("Mongo connected:", connectionDB.connection.host);

//     server.listen(app.get("port"), () => {
//       console.log(`🚀 Server running on port ${app.get("port")}`);
//     });

//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error.message);
//   }
// };

// start();




import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketmanager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://imdigitalashish:imdigitalashish@cluster0.cujabk4.mongodb.net/")

    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("LISTENIN ON PORT 8000")
    });



}



start();
