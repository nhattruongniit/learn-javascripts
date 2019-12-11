function User() {
  let username;
  let password;

  function doLogin(user, pass) {
    username = user;
    password = pass;
    console.log("login: ", username, password);
  }

  const publicApi = {
    login: doLogin
  };

  return publicApi;
}

const fred = new User();
fred.login("fred", "123");
