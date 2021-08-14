const Creator = require("../models/creator");
const jwt = require("jsonwebtoken");
let admin = require("firebase-admin");
let Storage = require("@google-cloud/storage");
let config = require("../config.json");

let db = admin.firestore();

const storage = new Storage({
  projectId: config.project_id,
  // keyFilename: "./config/config.json"
});

const bucket = storage.bucket(`${config.project_id}.appspot.com`);

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
      { username: creator.email, userId: creator._id },
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

exports.createMerchandise = (req, res, next) => {};
