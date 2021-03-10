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


const People = () => {
  return (
    <div>
      <h1>I'm a people</h1>
    </div>
  )
}

export default People;