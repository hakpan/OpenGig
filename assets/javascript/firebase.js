  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC61WrABW6CFd-EDGepLsXbYlwzRfXSngI",
    authDomain: "opengig-a3cc4.firebaseapp.com",
    databaseURL: "https://opengig-a3cc4.firebaseio.com",
    projectId: "opengig-a3cc4",
    storageBucket: "opengig-a3cc4.appspot.com",
    messagingSenderId: "880941324318"
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
$("#submitArtist").on("click", function() {
	//Don't refresh page!
	event.preventDefault();

	//Get artist data from DOM
	artist = $("#validationUserName").val().trim();
	password = $("#validationPassword").val().trim();
	url = $("#validationUrl").val();
	city = $("#validationCity").val().trim();
	state = $("#validationState").val().trim();
	genre = $("#genre-input").val();

	console.log(artist);
	console.log(url);
	console.log(city);
	console.log(state);
	console.log(genre);

// Clear out input text as a courtesy to your user.
  $("#validationUserName").val("");
  $("#validationPassword").val("");
  $("#validationUrl").val("");
  $("#validationCity").val("");
  $("#validationState").val("");
  $("#genre-input").val("");

  	// Push data to database.
  	database.ref().push({
    artist: artist,
    url: url,
    city: city,
    state: state,
    genre: genre


	// if (artist != "" && password != "" && website != "" && cityName != "" && stateAbbr != "" && genre != []) { 
	// //should be replaced by an if statement that won't allow anything to happen unless it has passed validation test
	// 	dataRef.ref().push({
	// 		artist: artist,
	// 		password: password,
	// 		url: url,
	// 		city: city,
	// 		state: state,
	// 		genre: genre
	// 	});
	// };
	});
});

// Firebase watcher
// Retrieve list of musicians using child_added

database.ref().on("child_added", function(snapshot) {
  	
  // Build up musician table in DOM.
  $("#musicianList").append("<tr>" +
                        "<th>" + snapshot.val().artist + "</th>" +
                        "<th>" + snapshot.val().url + "</th>" +
                        "<th>" + snapshot.val().city + "</th>" +
                        "<th>" + snapshot.val().state + "</th>" +
                        "<th>" + snapshot.val().genre + "</th>" +
                      "</tr>");
});


