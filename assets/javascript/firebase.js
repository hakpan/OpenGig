var config = {
	apiKey: "AIzaSyDmxB9LPiDc99yS0ggUBgEqfegNG7Bdf24",
	authDomain: "opengig-150a3.firebaseapp.com",
	databaseURL: "https://opengig-150a3.firebaseio.com",
	projectId: "opengig-150a3",
	storageBucket: "opengig-150a3.appspot.com",
	messagingSenderId: "17557724214"
};
firebase.initializeApp(config);

var dataRef = firebase.database();

var artist = "";
var password = "";
var website = "";
var cityName = "";
var stateAbbr = "";
var genre = [];

$("#submit-new-artist").on("click", function() {
	artist = $("#artist-name-input").val().trim();
	password = $("#inputPassword").val();
	website = $("#website-input").val().trim();
	cityName = $("#city-name-input").val().trim();
	stateAbbr = $("#state-abbr-input").val();
	genre = $("#genre-input").val();

	console.log(artist);
	console.log(website);
	console.log(cityName);
	console.log(stateAbbr);
	console.log(genre);

	if (artist != "" && password != "" && website != "" && cityName != "" && stateAbbr != "" && genre != []) { //should be replaced by an if statement that won't allow anything to happen unless it has passed validation test
		dataRef.ref().push({
			artist: artist,
			password: password,
			website: website,
			cityName: cityName,
			stateAbbr: stateAbbr,
			genre: genre
		});
	};
});

$("#login-button").on("click", function() {
	dataRef.ref().get()
})