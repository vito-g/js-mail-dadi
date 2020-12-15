var email = prompt ('Inserisci la tua email');
console.log('La sua email è: ' + email);
var data = document.getElementById('advert');

var outputElement = document.getElementById('output');
outputElement.className = 'denied';

var lista = ['pippo@gmail.com', 'pluto@yahoo.it', 'paperino@tiscali.it', 'minni@gmail.com', 'paperone@gmail.com', 'qui@gmail.com', 'quo@gmail.com', 'qua@gmail.com'];
var emailTrovata = false;
for(var i = 0; i < lista.length; i++) {
  if (email === lista[i]) {
    emailTrovata = true;
  }
}

if (emailTrovata === true) {
  alert('Granted Access! Enjoy our Game!');
  data.innerHTML = 'Granted Access! Enjoy our Game!';
  var min = 1;
  var max = 6;
  var dadoTu = Math.floor(Math.random() * (max + 1 - min) + min);
  var dadoUser = document.getElementById('dado-user');
  dadoUser.innerHTML = 'Your score: ' + dadoTu;
  var min = 1;
  var max = 6;
  var dadoLui = Math.floor(Math.random() * (max + 1 - min) + min);
  var dadoPc = document.getElementById('dado-pc');
  dadoPc.innerHTML = 'Pc score: ' + dadoLui;
  var output = document.getElementById('output');

  if (dadoTu > dadoLui) {
    var outputElement = document.getElementById('output');
    outputElement.className = 'granted';
    output.innerHTML = ('Hai Vinto!');
  } else if (dadoTu < dadoLui){
    var outputElement = document.getElementById('output');
    outputElement.className = 'denied';
    output.innerHTML = ('Hai Perso!');
  } else if (dadoTu === dadoLui){
    var outputElement = document.getElementById('output');
    outputElement.className = 'draw';
    output.innerHTML = ('The game is a draw.. Try Again!');
  }
}
else {
  alert('Denied Access! No Access No Game!');
  data.innerHTML = 'Denied Access! No Access No Game!';
}
