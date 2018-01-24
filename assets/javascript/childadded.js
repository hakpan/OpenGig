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
		"<th>" + snapshot.val().video + "</th>" +
		"</tr>");
	} else {
		$("#venueList").append("<tr>" +
		"<th>" + snapshot.val().username + "</th>" +
		"<th>" + snapshot.val().city + ", " + snapshot.val().state + "</th>" +
		"<th>" + snapshot.val().gigsAvailable + "</th>" +
		"<th>" + snapshot.val().gigDate + "</th>" +
		"<th>" + snapshot.val().genre + "</th>" +
		"<th>" + snapshot.val().budget + "</th>" +
		"<th>" + player + "</th>" +
		"</tr>");
	}	



	//Youtube API
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '190',
          width: '300',
          videoId: 'Xjdkc14-zwQ',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
    
});
