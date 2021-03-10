import "./styles/index.scss";

const users = {
  name: "hironmoy",
  age: 32,
  job: "Web Developer",
};

const newUsers = {
  ...users,
  name: "Gaurav Dhar",
  age: 32,
  job: "Full Stack Developer",
};

console.log(users);
console.log(newUsers);
