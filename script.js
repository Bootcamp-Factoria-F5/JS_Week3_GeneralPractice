let users = [
  {
    name: "Abdul",
    mail: "abdul@gmail.com",
    id: 1,
  },
  {
    name: "Donald Trump",
    mail: "trump@gmail.com",
    id: 2,
  },
];
function addUser(name, id, NewMail) {
  const newUser = {
    name: name,
    id: id,
    mail: NewMail,
  };
  users.push(newUser);
}
function deleteUser(IdDelete) {
  const filterUsers = [];
  for (let user of users) {
    if (user.id != IdDelete) {
      filterUsers.push(user);
    }
    users = filterUsers;
  }
}
function changeMailUser(IdChange, ChangeMail) {
  const filterUsers = [];
  for (let user of users) {
    if (user.id == IdChange) {
      user.mail = ChangeMail;
      filterUsers.push(users);
    }
    //users = filterUsers;
  }
}
addUser("Kamala Harris", 27, "kamala@gmail");
deleteUser(1);
changeMailUser(2, "foxnews@gmail.com");
console.log(users);
//update
