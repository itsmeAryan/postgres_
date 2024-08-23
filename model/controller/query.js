const express = require("express");
const app = express();
const port = 3000;
const db = require("./model/sequel");
let user = db.user;
const { Sequelize, Op } = require("sequelize");
let i = 0;
app.get("/create", async (req, res) => {
  try {
    const users = await user.create(
      {
        user: "John---" + i++,
        email: "johndoe@example.com" + i,
        gender: "male" + i,
      },
      {
        fields: ["email", "gender"], //will add value of this field only
      }
    );

    return res.status(200).json(users);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});
app.get("/all", async (req, res) => {
  try {
    /*   select data
	all data
    const users = await user.findAll();
    
	get specific fields only
	 const users = await user.findAll({
      attributes: ["user"],
    });

	get specific fields with rename
	const users = await user.findAll({
      attributes: [["user", "userName"]],
    });

	get count of specific fields
	const users = await user.findAll({
      attributes: [[Sequelize.fn("Count", Sequelize.col("user")), "userCount"]],
    });
	const users = await user.findAll({
      attributes: [
        // [Sequelize.fn("Count", Sequelize.col("user")), "userCount"],
        [Sequelize.fn("Concat", Sequelize.col("user"), "mangal"), "userCount"],
      ],
    });
    
	include or exclude fields
    const users = await user.findAll({
      attributes: {
        exclude: ["create_at"],
      },
    });
	const users = await user.findAll({
      attributes: {
        include: [
          [
            Sequelize.fn("Concat", Sequelize.col("user"), " mangal"),
            "userName",
          ],
        ],
      },
    });

	conditions
	const users = await user.findAll({
      where: {
        gender: "male",
      },
      //   order: [["user", "ASC"]],
      //   limit: 5,
    });
	 const users = await user.findAll({
      where: {
        email: {
            [Op.eq]: 13,
            [Op.in]: [13, 7, 15],
            [Op.or]: [12, 13, 14, 15],
        },
        email: {
          //   [Op.eq]: 13,
          //   [Op.in]: [13, 7, 15],
          //   [Op.or]: [12, 13, 14, 15],
          [Op.like]: "%com%",
        },
		offset:1,
		limit:2,
		order:[["user","ASC"]]
      },
    });
     */
    const users = await user.findAll({
      //   where: {
      groupBy: ["user"],

      //   },
    });
    const totalcount = await user.count({
      where: {
        gender: "male",
      },
    });
    return res.status(200).json({ users, totalcount });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

/*
select
where: and,or,in like etc
order by
limit
group by

*/
