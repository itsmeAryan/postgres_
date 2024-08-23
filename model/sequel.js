const { Sequelize, DataTypes } = require("sequelize");
const sequel = new Sequelize("postgres", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  pool: {
    max: 5,
    min: 0,
  },
});
sequel
  .authenticate()
  .then((d) => {
    console.log("connected");
  })
  .catch((e) => {
    console.log(e.message);
  });
const db = {};
db.sequelize = sequel;
db.Sequelize = Sequelize;
db.user = require("./user.model")(sequel, DataTypes);
// db.sequelize
//   .sync
//   // {force:true}   delete table then create
//   ()
//   .then((db) => {
//     console.log("Database & tables created!");
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// db.user
//   .build({
//     user: "daku",
//     email: "moto@gmail.com",
//     gender: "male",
//   })
//   .save()
//   .then((res) => {
//     console.log("created");
//   })
//   .catch((e) => {
//     console.log(e.message, "not created");
//   });
db.sequelize;
module.exports = db;
db.sequelize
  .sync()
  .then(() => {
    console.log("Database & tables created!");
    // return db.user
    //   .create({
    //     user: "daku",
    //     email: "moto@gmail.com",
    //     gender: "male",
    //   })
    //   .then((res) => {
    //     console.log("User created", res.toJSON());
    //   })
    //   .catch((e) => {
    //     console.log(e.message, "User not created");
    //   });
  })
  .catch((e) => {
    console.log("Sync error:", e.message);
  });
