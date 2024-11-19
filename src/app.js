import express from "express"
import cookieParser from "cookie-parser";  
import cors  from "cors"


const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN , //mai backend mai kiss kiss jagah se data accept krra hu
        credentials:true
    }
))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true , limit: "16kb"}))  //extended is basically for that ki aap objects ke andar objects le skte ho
app.use(express.static("public")) //public assets store krne ke liye public folder mai 
app.use(cookieParser())  //mai server se jo user ka browser h uski cookies access bhhi krr pau aur change bhi kar pau



//routes import
import userRouter from './routes/user.routes.js'


//routes declaration
app.use("/api/v1/users", userRouter);

app.get("/test", (req, res) => {
    res.status(200).json({ message: "Test route works!" });
});

export { app }