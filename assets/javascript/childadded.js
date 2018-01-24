// Firebase watcher
// Retrieve list of musicians using child_added

dataRef.ref().on("child_added", function(snapshot) {
	var type = snapshot.val().userType;

	if (type == "artist") {
		  // Build up musician table in DOM.
		$("#musicianList").append("<tr>" +
		"<th>" + snapshot.val().username + "</th>" +
		"<th>" + snapshot.val().url + "</th>" +
		"<th>" + snapshot.val().city + "</th>" +
		"<th>" + snapshot.val().state + "</th>" +
		"<th>" + snapshot.val().genre + "</th>" +
		"</tr>");
	} else {
		$("#venueList").append("<tr>" +
		"<th>" + snapshot.val().username + "</th>" +
		"<th>" + snapshot.val().city + ", " + snapshot.val().state + "</th>" +
		"<th>" + snapshot.val().gigsAvailable + "</th>" +
		"<th>" + snapshot.val().gigDate + "</th>" +
		"<th>" + snapshot.val().genre + "</th>" +
		"<th>" + snapshot.val().budget + "</th>" +
		"</tr>");
	}
});
