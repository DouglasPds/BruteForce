function CreateUser() {
  localStorage.setItem("username", document.getElementById("username").value);
  localStorage.setItem("password", document.getElementById("password").value);
  //Define os inputs de usuário e senha para uma string vazia
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

//Define o nome do usuário cadastrado para o login
function SetUsername() {
  document.getElementById("usernameLogin").innerHTML =
    "Username: " + localStorage.getItem("username");
  return false;
}

//Variável da contramedida
let nTriesLogin = 0;

//Compara a senha digitada com a senha cadastrada
function LoginUser() {
  if (
    document.getElementById("passwordLogin").value ==
    localStorage.getItem("password")
  ) {
    document.getElementById("response").innerHTML = "Logged";
    document.getElementById("logged").innerHTML =
      "Welcome " + localStorage.getItem("username");
    nTriesLogin = 0;
    return false;
  } else {
    document.getElementById("response").innerHTML = "Invalid credentials";

    // //Contramedida
    // nTriesLogin += 1;
    // //Com 3 erros desabilita o botão de login temporariamente
    // if (nTriesLogin == 3) {
    //   document.getElementById("submit").disabled = true;
    //   document.getElementById("response").innerHTML = "Login temporary blocked";
    //   setTimeout(function () {
    //     document.getElementById("submit").disabled = false;
    //     document.getElementById("response").innerHTML = "";
    //   }, 5000);

    //   //Com 6 erros desabilita o botão de login
    // } else if (nTriesLogin >= 6) {
    //   document.getElementById("submit").disabled = true;
    //   document.getElementById("response").innerHTML = "Login blocked";
    // }
    return false;
  }
}

function BruteForce() {
  //Inicia a contagem do tempo de execução do código
  console.time("bruteForce");
  let nTries = 0;

  for (let discover = 0; discover <= 999; discover++) {
    //Coloca os zeros a esquerda
    discover = String(discover).padStart(6, "0");
    console.log("value", discover);
    //Define o valor da senha
    document.getElementById("passwordLogin").value = discover;
    //Clica no botão de login
    document.getElementById("submit").click();
    //Variável para contar a quantidade de tentativas
    nTries += 1;

    if (document.getElementById("response").innerHTML === "Logged") {
      //Mostra o valor da senha, o número de tentativas e o tempo gasto
      console.log("Discovered value!!!", discover);
      console.log("Number of tries: ", nTries);
      console.timeEnd("bruteForce");
      return false;
    }
  }
}
