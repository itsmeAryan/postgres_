const obj = {
  data: "resume",
  arr: [
    {
      name: "tako",
      age: [
        {
          name: function () {
            console.log("df");
          },
          sudo: [],
        },
      ],
    },
  ],
};
let objectDetection = {
  null: "Null",
  undefined: "undefined",
  string: "String",
  number: "Number",
  object: "Object",
};

function checkValue(data) {
  return data === null ? null : data?.constructor.name;
}

let value = checkValue(obj["arr"][0]["age"][0]["name"]);
console.log(value);
