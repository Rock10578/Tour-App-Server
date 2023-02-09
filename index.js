import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import morgan from "morgan";

// Routes
import userRoutes from "./routes/user.js";

// App initialising
const app = express();

const PORT = 5050;

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const MONGOURL = "mongodb+srv://TourAdmin:TourAdmin1234@cluster0.rlm4tcd.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery', false);
mongoose.connect(MONGOURL).then(() => {
    console.log("Connected to the Server")
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch((err) => console.log(err, "\n err in connection"));

app.use("/user", userRoutes);
// app.get('/', (req,res) => {
//     res.send("Hello Listening to the server....");
// });

