require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');
const {HoldingsModel} = require('./models/HoldingModel');
const {PositionsModel} = require('./models/PositionModel');
const app = express()

const PORT = process.env.PORT ||8080;
const MONGO_URL = process.env.MONGO_URL;

app.listen(PORT, ()=>{
  console.log(`server is listening at ${PORT}`);
  mongoose.connect(MONGO_URL)
  console.log("DB connected.!");
})

app.use(cors());
app.use(bodyParser.json());

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get('/', (req, res)=>{
  res.send('Hii')
})