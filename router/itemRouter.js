import express from "express";
import Item from "../models/itemModel.js";
import expressAsyncHandler from "express-async-handler";
import { isAuth } from '../utils.js';

const itemRouter = express.Router();
itemRouter.use(express.urlencoded({ extended: true })); // new way after Express 4.16

let temp = "";
let temp2 = "";
//temporary routes and variable names
itemRouter.post(
  "/t",
  expressAsyncHandler(async (req, res) => {
    temp = req.body.email;
    temp2 = req.body.companyName;

    console.log("Email is "+ temp);
    console.log("Company name is "+ temp2);
  })
);

itemRouter.post(
  "/searchByComp",
  expressAsyncHandler(async (req, res) => {
    const items = await Item.find({companyName: req.body.companyName});
    res.send(items);
  })
);

itemRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    console.log("temp is "+ temp);

    const s = temp;
    // const s2 = temp2;
    
    const regex = new RegExp(s, 'i')
    // const regex2 = new RegExp(s2,'i');

    const item = await Item.find({email: {$regex: regex} }); //search for item using given email
    //email is initially stored in the item database, then the email is stored in a cookie, sent as a post request,
    //then used in the get request to find items with only that email value
    //we can later use a better unique id for each item that idenfitifes that item to a specific user but
    //for now, this works well

    
    // const item = await Item.find({email: {$regex: regex}}
    if (item) {
      res.send(JSON.stringify(item));
      //console.log(JSON.stringify(item));
      //pull records where company name = ...
      //res.send(JSON.stringify(item));
    } else {
      console.log("no items");
    }

  })
);


// Get single Item record
itemRouter.get(
  "/findById/:id", 
  //isAuth,
  expressAsyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id);
    if (item) {
      res.send({
        _id: item._id,
        name: item.name,
        accessionId: item.accessionId,
        donorInfo: item.donorInfo,
        storageLocation: item.storageLocation,
        condition: item.condition,
        material: item.material,
        dimensions: item.dimensions,
        date: item.date,
        description: item.description,
        image: item.image,
      });
    } else {
      res.status(404).send({ message: "Item Not Found" });
    }
  })
);

// create item
itemRouter.post(
  "/AddNew",
  expressAsyncHandler(async (req, res) => {
    // console.log(req.body.name);
    // console.log(req.body.accessionId);
    // console.log(req.body.donorInfo);
    // console.log(req.body.storageLocation);
    // console.log(req.body.condition);
    // console.log(req.body.material);
    // console.log(req.body.dimensions);
    // console.log(req.body.date);
    // console.log(req.body.description);
    // console.log(req.body.image);
    const item = await new Item({
      name: req.body.name,
      accessionId: req.body.accessionId,
      donorInfo: req.body.donorInfo,
      storageLocation: req.body.storageLocation,
      condition: req.body.condition,
      material: req.body.material,
      dimensions: req.body.dimensions,
      date: req.body.date,
      description: req.body.description,
      image: req.body.image,
      email: req.body.email,
      companyName: req.body.companyName
    });
    const createdItem = await item.save();
    res.send({
      _id: createdItem._id,
      name: createdItem.name,
      accessionId: createdItem.accessionId,
      donorInfo: createdItem.donorInfo,
      storageLocation: createdItem.storageLocation,
      condition: createdItem.condition,
      material: createdItem.material,
      dimensions: createdItem.dimensions,
      date: createdItem.date,
      description: createdItem.description,
      image: createdItem.image,
    });
  })
);

//update item

// deleting item
itemRouter.delete(
  "/deleteById/:_id",
  expressAsyncHandler(async (req, res) => {
    const item = await Item.findById(req.params._id);
    if (item) {
      const deleteItem = await item.remove();
      res.send({ message: "Item Deleted", item: deleteItem });
    } else {
      res.status(404).send({ message: "Item Not Found" });
    }
  })
);

itemRouter.put(
  '/editById/:id',
  expressAsyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id);

    if (item) {

      item.name = req.body.name || item.name;
      item.accessionId = req.body.accessionId || item.accessionId;
      item.donorInfo = req.body.donorInfo || item.donorInfo;
      item.storageLocation = req.body.storageLocation || item.storageLocation;
      item.condition = req.body.condition || item.condition;
      item.material = req.body.material || item.material;
      item.dimensions = req.body.dimensions || item.dimensions;
      item.date = req.body.date || item.date;
      item.description = req.body.description || item.description;
      item.image = req.body.image || item.image;

      const updatedItem = await item.save();
      res.send({ message: 'Item Updated', item: updatedItem });
    } else {
      res.status(404).send({ message: 'Item ID Not Found' });
    }
  })
);

itemRouter.get("/delete/:id").delete((req, res, next) => {
  Item.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

export default itemRouter;
