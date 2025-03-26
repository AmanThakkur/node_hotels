const express = require("express");
const router = express.Router();
const menuItem = require("./../models/menuItem");
const { json } = require("body-parser");

router.get("/", async (req, res) => {
  try {
    const data = await menuItem.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newmenuItem = new menuItem(data);
    const response = await newmenuItem.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get('/:taste' , async(req , res ) => {
  try {
    const tasteType = req.params.taste;
    if (tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour') {
      const response = await menuItem.find({ taste : tasteType});
      console.log('respone Fetched');
      res.status(200).json(response) ;
      
    } else {
      res.status(404).json({error : 'invalid taste type'}) ;
    }
  } catch (error) {
    console.log(err);
    res.status(500).json({error: 'internal server error'})
  }
})

module.exports = router;