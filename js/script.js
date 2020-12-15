var email = prompt ('Inserisci la tua email');
console.log('La sua email è: ' + email);

var accessElement = document.getElementById('advert');
var min = 1;
var max = 6;
var outputElement = document.getElementById('output');

var lista = ['pippo@gmail.com', 'pluto@yahoo.it', 'paperino@tiscali.it', 'minni@gmail.com', 'paperone@gmail.com', 'qui@gmail.com', 'quo@gmail.com', 'qua@gmail.com'];
var emailTrovata = false;
for(var i = 0; i < lista.length; i++) {
  if (email === lista[i]) {
    emailTrovata = true;
  }
}

if (emailTrovata === true) {
  alert('Granted Access! Enjoy our Game!');
  accessElement.className = 'granted';
  accessElement.innerHTML = 'Granted Access! Enjoy our Game!';
  var dadoTu = Math.floor(Math.random() * (max + 1 - min) + min);
  var dadoUser = document.getElementById('dado-user');
  dadoUser.innerHTML = 'Your score: ' + dadoTu;
  var dadoLui = Math.floor(Math.random() * (max + 1 - min) + min);
  var dadoPc = document.getElementById('dado-pc');
  dadoPc.innerHTML = 'Pc score: ' + dadoLui;

  if (dadoTu > dadoLui) {
    outputElement.className = 'you-won';
    outputElement.innerHTML = ('You Won!');
  }
  else if (dadoTu < dadoLui) {
    outputElement.className = 'you-lost';
    outputElement.innerHTML = ('You Lost!');
  }
  else if (dadoTu === dadoLui) {
    outputElement.className = 'draw';
    outputElement.innerHTML = ('The game is a draw. Try Again!');
  }
}
else {
  alert('Denied Access! No Access No Game!');
  accessElement.className = 'denied';
  accessElement.innerHTML = 'Denied Access! No Access No Game!';
}
