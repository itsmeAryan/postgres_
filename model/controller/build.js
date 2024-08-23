const db = require("../sequel");
let user = db.user;
let expample = user.build({
  name: "John Doe",
  email: "johndoe@example.com",
  gender: "male",
});
expample
  .save()
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
