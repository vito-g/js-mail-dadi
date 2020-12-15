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

if (emailTrovata === true) {
  alert('Puoi giocare');
}
else {
  alert('Non puoi giocare');
}



  // else if (lista[i] !== 'pluto@yahoo.it') {
  //     alert('Email errata, accesso negato!');
  //   }
