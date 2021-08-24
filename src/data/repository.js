const USERS_KEY = "users";

function initUsers() {
  if(localStorage.getItem(USERS_KEY) !== null)
    return;

  // NOTE: An object has been used for key / value access, if preferred an array could be used instead.
  setUsers({});
}

function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY));
}

function setUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function insertOrUpdateUser(user) {
  const users = getUsers();

  users[user.name] = user;

  setUsers(users);
}

export {
  initUsers,
  getUsers,
  insertOrUpdateUser
}
