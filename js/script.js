var email = prompt ('Inserisci la tua email');
console.log('La sua email è: ' + email);
var firstData = document.getElementById('data-uno');
firstData.innerHTML = 'La sua email è: ' + email;
var secondData = document.getElementById('data-due');
// secondData.innerHTML = 'La sua email è: ' + email;

var lista = ['pippo@gmail.com', 'pluto@yahoo.it', 'paperino@tiscali.it', 'minni@gmail.com', 'paperone@gmail.com', 'qui@gmail.com', 'quo@gmail.com', 'qua@gmail.com'];
var emailTrovata = false;
for(var i = 0; i < lista.length; i++) {
  if (email === lista[i]) {
    emailTrovata = true;
  }
}


var dadoPc = document.getElementById('dado-pc');
dadoPc.innerHTML = dado;

if (emailTrovata === true) {
  alert('Puoi giocare');
  secondData.innerHTML = 'Puoi giocare a Dadi';
  var min = 1;
  var max = 6;
  var dado = Math.floor(Math.random() * (max + 1 - min) + min);
  var dadoUser = document.getElementById('dado-user');
  dadoUser.innerHTML = dado;
  var min = 1;
  var max = 6;
  var dado = Math.floor(Math.random() * (max + 1 - min) + min);
  var dadoPc = document.getElementById('dado-pc');
  dadoPc.innerHTML = dado;
}
else {
  alert('Non puoi giocare');
  secondData.innerHTML = 'Non puoi giocare';
}









  // else if (lista[i] !== 'pluto@yahoo.it') {
  //     alert('Email errata, accesso negato!');
  //   }
