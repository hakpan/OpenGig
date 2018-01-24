$(".login-button").on("click", function () {
	email = $("#lg_username").val();
	password = $("#lg_password").val();

	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
	});
});




firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {

    firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

firebase.auth().onAuthStateChanged(firebaseUser => {
	if(firebaseUser) {
		console.log(firebaseUser.email);
		$("#user-item").text("Log out");
		$("#menu").append('<li class="nav-item"><a class="nav-link" href="#">'+ firebaseUser.email +'</a></li>');
	} else {
		console.log("not logged in");
	};
});