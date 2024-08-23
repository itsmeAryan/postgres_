const db = require("../sequel");
let user = db.user;
user
  .create({
    user: "moe Doe",
    email: "moedoe@example.com",
    gender: "male",
  })
  .then(async (data) => {
    data.user = "popat lal";
    await data.save();
    // data.destroy();
    console.log("see data: ", data.dataValues);
  })
  .catch((e) => {
    console.log(e);
  });
