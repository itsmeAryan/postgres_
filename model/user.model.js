// module.exports = (sequel, datatype) => {
//   const Users = sequel.define(
//     "Moto",
//     {
//       user: {
//         type: datatype.STRING,
//         set(value) {
//           this.setDataValue("user", value + " goku");
//         },
//         get() {
//           return this.getDataValue("user")?.replace(" goku", "");
//         },
//       },
//       email: {
//         type: datatype.STRING,
//         defaultValue: "email@gmail.com",
//       },
//       gender: {
//         type: datatype.STRING,
//         defaultValue: "male",
//       },
//     },
//     {
//       //   timestamps:false removes created
//       tableName: "Todo",
//       updatedAt: false,
//       createdAt: "create_at",
//     }
//   );
//   return Users;
// };

// validations
module.exports = (sequel, datatype) => {
  const Users = sequel.define(
    "UserValidation",
    {
      username: {
        type: datatype.STRING,
        allowNull: true,
        validate: {
          notEmpty: {
            msg: "Username cannot be empty",
          },
          len: {
            args: [3, 15],
            msg: "Username must be between 3 and 15 characters long",
          },
        },
      },
      email: {
        type: datatype.STRING,
        defaultValue: "abc@gmail.com",
        unique: true,
      },
      role: {
        type: datatype.STRING,
        validate: {
          equals: ["male1", "female1"],
        },
      },
    },
    {
      //   timestamps:false removes created
      // tableName: "Todo",
      updatedAt: false,
      // createdAt: "create_at",
    }
  );
  return Users;
};
