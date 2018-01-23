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