import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import taskRouter from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(taskRouter);

mongoose
  .connect(
    
    "mongodb+srv://admin:admin@12@clustertodo.3jmwegu.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTODO",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any
  ) // Suppressing error with 'as any'
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
