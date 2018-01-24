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
//Initial list values
var userType = "";
var username = "";
var email;
var password;
var url = "";
var city = "";
var state = "";
var genre = [];
var gigsAvailable = "";
var gigDates = "";
var budget = "";
