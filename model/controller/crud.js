// require("./model/controller/create");
const express = require("express");
const app = express();
const port = 3000;
const db = require("./model/sequel");
let user = db.user;
let i = 0;
app.get("/getall", async (req, res) => {
  try {
    const users = await user.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});
app.get("/get/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await user.findByPk(id);
    return res.status(200).json(users);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});
app.get("/create", async (req, res) => {
  try {
    const users = await user.create({
      user: "John Doe" + i++,
      email: "johndoe@example.com" + i,
      gender: "male" + i,
    });

    return res.status(200).json(users);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});
app.get("/bulk-create", async (req, res) => {
  try {
    const users = await user.bulkCreate([
      {
        user: "John sign" + i++,
        email: "sign@example.com" + i,
        gender: "male" + i,
      },
      {
        user: "John sign" + i++,
        email: "sign@example.com" + i,
        gender: "male" + i,
      },
      {
        user: "John sign" + i++,
        email: "johndoe@example.com" + i,
        gender: "Female" + i,
      },
      {
        user: "John sign" + i++,
        email: "johndoe@example.com" + i,
        gender: "male" + i,
      },
    ]);

    return res.status(200).json(users);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});
app.get("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = req.query;
    const userdata = await user.update(
      {
        user: "babooo",
        email: "baboo@gmail.com",
      },
      {
        where: {
          id,
        },
      }
    );

    return res.status(200).json(userdata);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});
app.get("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await user.destroy({
      truncate: true, //delete all data
      //   where: {
      //     id,
      //   },
    });

    return res.status(200).json(userData);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
