function User() {
  var username, password;

  function doLogin(user, pass) {
    username = user;
    password = pass;
    console.log('login: ', username, password)
  }

  var publicAPI = {
    login: doLogin
  };
  
  return publicAPI;
}

var fred = User();
fred.login('truog', '123');