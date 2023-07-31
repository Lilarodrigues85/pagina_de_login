var usuario = "rtncursos@gmail.com";
var password = "12345678"

function checkLogin() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (usuario == email && password == senha) {
    document.location.href = "login.html";
  } else {
    alert("Usuario ou senha errados");
    document.getElementById("forget").style.display = "flex";
  }
}