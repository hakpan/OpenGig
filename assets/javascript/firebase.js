  // Initialize Firebase
var config = {
	apiKey: "AIzaSyDmxB9LPiDc99yS0ggUBgEqfegNG7Bdf24",
	authDomain: "opengig-150a3.firebaseapp.com",
	databaseURL: "https://opengig-150a3.firebaseio.com",
	projectId: "opengig-150a3",
	storageBucket: "opengig-150a3.appspot.com",
	messagingSenderId: "17557724214"
};
firebase.initializeApp(config);

//Create a variable to reference the database.
var dataRef = firebase.database();

//Variables
// ----------------------------
//Initial Artist list values
var artist = "";
var password = "";
var url = "";
var city = "";
var state = "";
var genre = [];

//Capture Submit Button Click
$("#submitArtist").on("click", function(event) {
	//Don't refresh page!
	event.preventDefault();

	//Get artist data from DOM
	artist = $("#validationUserName").val().trim();
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
			artist: artist,
			password: password,
			url: url,
			city: city,
			state: state,
			genre: genre
		});
	};
});


// Firebase watcher
// Retrieve list of musicians using child_added

dataRef.ref().on("child_added", function(snapshot) {
  	
  // Build up musician table in DOM.
$("#musicianList").append("<tr>" +
	"<th>" + snapshot.val().artist + "</th>" +
	"<th>" + snapshot.val().url + "</th>" +
	"<th>" + snapshot.val().city + "</th>" +
	"<th>" + snapshot.val().state + "</th>" +
	"<th>" + snapshot.val().genre + "</th>" +
	"</tr>");
});

$(".login-button").on("click", function () {
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
	});
});