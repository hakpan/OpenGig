//Capture Submit Button Click
$("#submitArtist").on("click", function(event) {
	//Don't refresh page!
	//event.preventDefault();

	//if artist is submitted, usertype in server will be artist
	userType = "artist";

	//Get artist data from DOM
	username = $("#validationUserName").val().trim();
	email = $("#validationEmailAddress").val();
	password = $("#validationPassword").val().trim();
	url = $("#validationUrl").val();
	city = $("#validationCity").val().trim();
	state = $("#validationState").val().trim();
	genre = $("#genre-input").val();


	if (username != "" && email != "" && password != "" && url != "" && city != "" && state != "" && genre != []) { 
	//should be replaced by an if statement that won't allow anything to happen unless it has passed validation test
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
		});

		dataRef.ref().push({
			userType: userType,
			username: username,
			url: url,
			city: city,
			state: state,
			genre: genre
		});
	};
});