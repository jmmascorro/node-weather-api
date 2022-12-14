import express from "express";
import bodyParser from "body-parser";
import router from "./routes/weather.js";
import cors from "cors";
import { sequelize } from "./db/index.js";

const app = express();

const port = process.env.PORT || 3002;

sequelize.sync()
.then(result => {
  console.log(result)
})
.catch(err => {
  console.log(err)
})

app.use(bodyParser.json());

app.use(cors({
  origin: '*'
}));

app.use(cors({
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(cors({
  allowedHeaders: '*'
}));

app.use("/api/weather", router);

app.get("*", (req, res) =>
  res.status(404).send("There is no content at this route.")
);

app.listen(port, () => console.log(`Server is listening on port ${port}`));

app.get('/api', (req, res) => {
  res.send("welcome to my API");
});

export default app;