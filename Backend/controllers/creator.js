const Creator = require("../models/creator");
const User = require("../models/user");
const Contract = require("../models/contract");
const Merchandise = require("../models/merchandise");
const Transaction = require("../models/transaction");
var mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const ipfsAPI = require("ipfs-api");
const ipfs = ipfsAPI("ipfs.infura.io", "5001", { protocol: "https" });
//let admin = require("firebase-admin");
//let Storage = require("@google-cloud/storage");
//let config = require("../config.json");

//let db = admin.firestore();

// const storage = new Storage({
//   projectId: config.project_id,
//   // keyFilename: "./config/config.json"
// });

//const bucket = storage.bucket(`${config.project_id}.appspot.com`);

exports.signup = async (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;
  const creator = new Creator({
    ...req.body,
    email: email.toLowerCase(),
    password: password.toLowerCase(),
  });

  try {
    await creator.save();
    res.status(200).send({ id: creator.id });
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res, next) => {
  let email = req.body.email.toLowerCase();
  let password = req.body.password.toLowerCase();
  //console.log(email, password);
  try {
    const creator = await Creator.findOne({
      $and: [{ email: email }, { password: password }],
    });
    if (!creator) {
      return res.status(400).json({ message: "Creator not found" });
    }

    const token = jwt.sign(
      { email: creator.email, id: creator._id },
      "secret",
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).json({
      message: "Creator Loggedin Successfully!",
      token: token,
      creatorId: creator._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getCreators = async (req, res, next) => {
  try {
    let creators = await Creator.find();
    res.status(200).send({ creators: creators });
    return;
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getCreatorById = async (req, res, next) => {
  try {
    let creator = await Creator.findById(req.body.id);
    res.status(200).send({ creator: creator });
    return;
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.uploadContract = async (req, res, next) => {
  let file = req.files.file;
  console.log(file);
  ipfs.add(file.data, async (err, file) => {
    console.log(file);
    if (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
      return;
    }
    const contract = new Contract({
      userId: req.user.id,
      title: req.body.title,
      description: req.body.description,
      hash: file[0].hash,
      fileUrl: `https://ipfs.infura.io/ipfs/${file[0].path}`,
    });
    try {
      await contract.save();
      res.status(200).send({ message: contract.id });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
};

exports.getContracts = async (req, res, next) => {
  try {
    let contracts = await Contract.find({ userId: req.user.id });
    res.status(200).send({ contracts: contracts });
    return;
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.createMerchandise = async (req, res, next) => {
  const userId = req.user.id;
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const file = req.files.file;
  var base64Image = new Buffer(file.data, "binary").toString("base64");
  const merchandise = new Merchandise({
    ...req.body,
    userId: req.user.id,
    image: base64Image,
  });
  try {
    await merchandise.save();
    res.status(200).send({ id: merchandise.id });
    return;
  } catch (error) {
    res.status(400).send(error.message);
    return;
  }
};

exports.getMerchandiseByuserId = async (req, res, next) => {
  try {
    let merchandises = await Merchandise.find({
      userId: mongoose.Types.ObjectId(req.user.id),
    });
    res.status(200).send({ merchandises: merchandises });
    return;
  } catch (error) {
    res.status(400).send(error.message);
    return;
  }
};

exports.addTransaction = async (req, res, next) => {
  let transaction = new Transaction({
    ...req.body,
    date: new Date(),
    userId: req.user.id,
  });
  try {
    await transaction.save();
    res.status(200).send({ id: transaction.id });
    return;
  } catch (error) {
    res.status(400).send(error.message);
    return;
  }
};

exports.getTransaction = async (req, res, next) => {
  try {
    let transactions = await Transaction.find({ userId: req.user.id });
    res.status(200).send({ transactions: transactions });
    return;
  } catch (error) {
    res.status(400).send(error.message);
    return;
  }
};
