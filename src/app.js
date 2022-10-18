import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

import { fetchApi } from "./api";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get("/dashboard/:id", (req, res) => {
  res.send(`<div>${req.params.id}</div>`)
});

app.get('/characters', async (req, res) => {
  try {
      const response = await fetchApi("/characters");
      const data = await response.json();
      res.json({
        data
      })
      
  } catch(err) {
    console.log(err);
  }
})

export default app;