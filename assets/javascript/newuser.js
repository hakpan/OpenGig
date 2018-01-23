//Capture Submit Button Click
$("#submitArtist").on("click", function(event) {
	//Don't refresh page!
	event.preventDefault();

	//if artist is submitted, usertype in server will be artist
	userType = "artist";

	//Get artist data from DOM
	username = $("#validationUserName").val().trim();
	password = $("#validationPassword").val().trim();
	url = $("#validationUrl").val();
	city = $("#validationCity").val().trim();
	state = $("#validationState").val().trim();
	genre = $("#genre-input").val();

	// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	// 	// Handle Errors here.
	// 	var errorCode = error.code;
	// 	var errorMessage = error.message;
	// });


	if (artist != "" && password != "" && url != "" && city != "" && state != "" && genre != []) { 
	//should be replaced by an if statement that won't allow anything to happen unless it has passed validation test
		dataRef.ref().push({
			userType: userType,
			username: username,
			password: password,
			url: url,
			city: city,
			state: state,
			genre: genre
		});
	};
});