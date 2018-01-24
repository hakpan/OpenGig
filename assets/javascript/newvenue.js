//Capture Submit Button Click
$("#submitVenue").on("click", function(event) {
	//Don't refresh page!
	//*****Leavig this code out because it messes up the validation
	//event.preventDefault(); 

	//if artist is submitted, usertype in server will be artist
	userType = "venue";

	//Get artist data from DOM
	username = $("#validationUserName").val().trim();
	email = $("#validationEmailAddress").val();
	password = $("#validationPassword").val().trim();
	url = $("#validationUrl").val();
	city = $("#validationCity").val().trim();
	state = $("#validationState").val().trim();
	genre = $("#genre-input").val();
	gigsAvailable = $("#validationGigsAvailable").val().trim();
	gigDate = $("#validationGigDate").val();
	budget = $("#validationBudget").val();


	if (username != "" && email != "" && password != "" && url != "" && city != "" && state != "" && genre != [] && gigsAvailable != "" && gigDate != "" && budget != "") { 
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
			genre: genre,
			gigsAvailable: gigsAvailable,
			gigDate: gigDate,
			budget: budget
		});
	};
});