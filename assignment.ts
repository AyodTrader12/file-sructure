import { v4 as uuid } from "uuid";
import fs from "node:fs";
import path from "node:path";
import moment from "moment";

console.log(__dirname);

fs.mkdir(path.join(__dirname, "Github"), () => {
  console.log("Folder created");
});

// let file = path.join("Github", "./Data.json");
// console.log(file);

let obj = {
  id: uuid(),
  name: "ibrahim",
  type: "user",
  public_repo: 50,
  site_admin: "false",
  createdAt: moment().format("llll"),
};
let file = "./Github/Data.json";
fs.writeFile(file, JSON.stringify(obj), () => {
  console.log("File created");
});
// let file = "./Github/Data.json";

// let read = JSON.parse(data.toaString());
fs.appendFile(file, JSON.stringify(obj), () => {
  console.log("File created");
});
// fs.writeFile(file, "", () => {
//   console.log("File created");
// });

fs.readFile(file, "utf-8", (err: any, data: any) => {
  if (err) throw err;
  console.log(data);
  // console.log(err);
});
