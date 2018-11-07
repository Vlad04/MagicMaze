 (function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBfbJaEMIfTJeauh29CcNSrS3wqUQvTFdg",
    authDomain: "magicmaze-2c8fe.firebaseapp.com",
    databaseURL: "https://magicmaze-2c8fe.firebaseio.com",
    projectId: "magicmaze-2c8fe",
    storageBucket: "magicmaze-2c8fe.appspot.com",
    messagingSenderId: "1055347234772"
  };
  firebase.initializeApp(config);
  const preObject = document.getElementById('Usuarios');
  const dbRefObject = firebase.database().ref();
  firebase.database().ref("Juan").set("500");
  dbRefObject.once("value", function(snapshot) {
    snapshot.forEach(function(child) {
      console.log(child.key+": "+child.val());
    });
  });
  console.log("hola "+firebase.database().ref().child("Juan").getKey());
  dbRefObject.on('value',snap =>console.log(dbRefObject));
  console.log("haaaaaaaaaaaaa");

}());
