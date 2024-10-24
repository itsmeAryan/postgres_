// const express = require("express");
// const app = express();
// const port = 3000;
// const db = require("./model/sequel");
// let user = db.user;
// const { Sequelize, Op } = require("sequelize");
// let i = 0;
// app.get("/create", async (req, res) => {
//   try {
//     const users = await user.create({
//       username: "Johnny",
//       email: "johndoe@example1.com" + i,
//       role: "male1",
//     });

//     return res.status(200).json(users);
//   } catch (error) {
//     return res.status(404).json({ message: error });
//   }
// });
// app.get("/all", async (req, res) => {
//   try {
//     // const users = await user.findOrCreate({
//     //   where: { user: "loli---2" },
//     //   defaults: { email: "johndoe@example.com2", gender: "male2" },
//     // });
//     const users = await user.findAll();
//     return res.status(200).json({ users });
//   } catch (error) {
//     return res.status(404).json({ message: error.message });
//   }
// });
// app.listen(port, () => {
//   console.log(`server started at http://localhost:${port}`);
// });

/*
findByPk
findOne
findAll
findAndCountAll
findOrCreate

*/
const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory array to store user data
let users = [];
let userId = 1; // ID for new users

// Create a new user
app.post("/create", (req, res) => {
  const { username, email, role } = req.body;
  const newUser = { id: userId++, username, email, role };
  users.push(newUser);
  return res.status(201).json(newUser);
});

// Get all users
app.get("/all", (req, res) => {
  return res.status(200).json({ users });
});

// Get a user by ID
app.get("/user/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    return res.status(200).json(user);
  }
  return res.status(404).json({ message: "User not found" });
});

// Update a user by ID
app.put("/update/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    const { username, email, role } = req.body;
    users[userIndex] = { id: users[userIndex].id, username, email, role };
    return res.status(200).json(users[userIndex]);
  }
  return res.status(404).json({ message: "User not found" });
});

// Delete a user by ID
app.delete("/delete/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    return res.status(204).send(); // No content to send back
  }
  return res.status(404).json({ message: "User not found" });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

