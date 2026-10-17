import express from "express";
import dotenv from "dotenv";
import sequelize  from "./config/db.js";
import { User, Post } from "./models/index.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 3000
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hello, Sequelize with Express!");

});

 app.post("/", async (req, res) => {   // Это Post запрос от клиента или Fullsteck 
  const { name, email } = req.body;
  try {
    await User.create({ name, email });
    res.status(201);
    res.json({ success: true, message: "User successfully registred!" });
  } catch (error) {
    res.json({ success: false, message: "Registration failed" });
  }
});


app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database has been established successfully");
    console.log(`Server is running on http://localhost:${port}`);
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
});

