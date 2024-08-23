const express = require("express");
const app = express();
const port = 3000;
const db = require("./model/sequel");
let user = db.user;
const { Sequelize, Op } = require("sequelize");
let i = 0;
app.get("/create", async (req, res) => {
  try {
    const users = await user.create({
      username: "Johnny",
      email: "johndoe@example1.com" + i,
      role: "male1",
    });

    return res.status(200).json(users);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
});
app.get("/all", async (req, res) => {
  try {
    // const users = await user.findOrCreate({
    //   where: { user: "loli---2" },
    //   defaults: { email: "johndoe@example.com2", gender: "male2" },
    // });
    const users = await user.findAll();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

/*
findByPk
findOne
findAll
findAndCountAll
findOrCreate

*/
