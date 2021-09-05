// REFERENCE: Code is adapted from Week 4 Actviity 3 from Lab Examples

// Declared Constants
const USERS_KEY = "users";
const USER_KEY = "user";
const EMAIL_KEY = "email";
const DATE_JOINED_KEY = "Date Joined";
const PASSWORD_KEY = "Password";
const POSTS_KEY = "posts";
const POSTS_KEY2 = "posts2";
const POSTS_KEY3 = "posts3";

// Initialise local storage "users" with data, if the data is already set this function returns immediately.
function initUsers() {

  // Stop if data is already initialised.
  if(localStorage.getItem(USERS_KEY) !== null)
    return;

  // User data is hard-coded, passwords are in plain-text.
  const users = [];

  // Set data into local storage.
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getUsers() {
  // Extract user data from local storage.
  const data = localStorage.getItem(USERS_KEY);

  // Convert data to objects.
  return JSON.parse(data);
}

// NOTE: In this example the login is also persistent as it is stored in local storage.
function verifyUser(email, password) {
  const users = getUsers();
  for(const user of users) {
    if(email === user.email && password === user.password)
    {
      setUser(user.username);
      setEmail(user.email);
      setDateJoined(user.currentDateTime);
      setPassword(user.password);
      return true;
    }
  }

  return false;
}

function setUser(username) {
  localStorage.setItem(USER_KEY, username);
}

function setEmail(email){
  localStorage.setItem(EMAIL_KEY, email);
}

function setPassword(Password){
  localStorage.setItem(PASSWORD_KEY, Password);
}

function removeEmail(){
  localStorage.removeItem(EMAIL_KEY);
}

function setDateJoined(DateJoined){
  localStorage.setItem(DATE_JOINED_KEY, DateJoined);
}

function removeDateJoined(){
  localStorage.removeItem(DATE_JOINED_KEY);
}

function removePost(){
  localStorage.removeItem(POSTS_KEY);
  localStorage.removeItem(POSTS_KEY2);
  localStorage.removeItem(POSTS_KEY3);
}


function getUser() {
  return localStorage.getItem(USER_KEY);
}

function getEmail() {
  return localStorage.getItem(EMAIL_KEY);
}

function getPosts(){
  return localStorage.getItem(POSTS_KEY);
}

function getPosts2(){
  return localStorage.getItem(POSTS_KEY2);
}

function getPosts3(){
  return localStorage.getItem(POSTS_KEY3);
}

function getPassword(){
  return localStorage.getItem(PASSWORD_KEY);
}

function getDateJoined() {
  return localStorage.getItem(DATE_JOINED_KEY);
}

function removeUser() {
  localStorage.removeItem(USER_KEY);
}

function removePassword() {
  localStorage.removeItem(PASSWORD_KEY);
}

function deleteAccount() {
  localStorage.removeItem(USERS_KEY);
}

function UpdateUsers(email) {
  const user = getUsers();

  email[user.email] = user;

  setEmail(email);
}

export {
  initUsers,
  verifyUser,
  getUser,
  removeUser,
  getEmail,
  removeEmail,
  getDateJoined,
  removeDateJoined,
  deleteAccount,
  getPassword,
  removePassword,
  UpdateUsers,
  getPosts,
  getPosts2,
  getPosts3,
  removePost,
}
