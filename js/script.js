var email = prompt ('Inserisci la tua email');
console.log('La sua email è: ' + email);
var firstData = document.getElementById('data-uno');
firstData.innerHTML = 'La sua email è: ' + email;
var secondData = document.getElementById('data-due');
// secondData.innerHTML = 'La sua email è: ' + email;

var lista = ['pippo@gmail.com', 'pluto@yahoo.it', 'paperino@tiscali.it', 'minni@gmail.com', 'paperone@gmail.com', 'qui@gmail.com', 'quo@gmail.com', 'qua@gmail.com'];
var emailTrovata = false;
for(var i = 0; i < lista.length; i++) {
  if (email === 'pluto@yahoo.it') {
    secondData.innerHTML = 'Salve utente, siamo felici di rivederla!';
  }
  else if (email !== 'pluto@yahoo.it') {
    secondData.innerHTML = 'Email errata, accesso negato!';
  }
}


  // else if (lista[i] !== 'pluto@yahoo.it') {
  //     alert('Email errata, accesso negato!');
  //   }
