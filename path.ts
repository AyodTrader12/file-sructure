console.clear();

// import path from "node:path";
// import fs from "node:fs";
// import { v4 as uuid } from "uuid";
// import moment from "moment";

// console.log(__dirname);
// console.log(__filename);

// console.log(path.extname(__dirname));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
// console.log(path.join(__dirname, "node", "index"));

// console.log(path.isAbsolute(__dirname));
// console.log(path.isAbsolute(__filename));

// console.log(path.isAbsolute(path.extname(__filename)));

// console.log(path.isAbsolute(path.basename(__filename)));

// console.log(path.basename(__filename));

// fs.readFile(file, "utf-8", (err: any, data: any) => {
//   if (err) throw err;

//   console.log(data);
// });

// fs.writeFile(file, "This is the best Code Ever!!!  ", () => {
//   console.log("File created!");
// });
// fs.appendFile(file, "This is the best Code Ever!!!  ", () => {
//   console.log("File created!");
// });

// let folder = path.join(__dirname, "data");
// let file = path.join(folder, "./text.txt");
// let db = path.join(folder, "./data.json");

// let obj = {
//   id: uuid(),
//   name: "Peter",
//   createdAt: moment(new Date().getTime()).format("llll"),
// };

// if (fs.existsSync(folder)) {
//   fs.appendFile(file, "This is the best Code Ever!!! ", () => {
//     console.log("file created");
//   });
// } else {
//   fs.mkdir(folder, () => {
//     console.log("Directory created!");

//     fs.writeFile(file, "This is the best Code Ever!!! ", () => {
//       console.log("file created");
//     });
//   });
// }

// fs.readFile(db, (err: any, data: any) => {
//   if (err) throw err;

//   console.log(JSON.parse(data.toString()));
// });
// fs.writeFile(db, JSON.stringify(obj), () => {
//   console.log("done!");
// });

// fs.readFile(db, (err, data) => {
//   if (err) throw err;

//   let read = JSON.parse(data.toString());
//   read.push(obj);

//   fs.writeFile(db, JSON.stringify(read), () => {
//     console.log("done!");
//   });
// });

const main = async (name: string) => {
  let url: string = ` https:api.github.com/users/${name}`;
  await fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    });
};

main("dwaynissh");
