//Google Maps API
      
      function initMap() {
        // Create a map object and specify the DOM element for display.
        var mapCenter = {lat: 44.9778, lng: -93.2650};
        var marker1 = {lat: 44.9, lng: -93.1};
        var marker2 = {lat: 44.96, lng: -93.23};
        var marker3 = {lat: 44.89, lng: -93.28};
        var marker4 = {lat: 44.98, lng: -93.2};
        var marker5 = {lat: 44.981, lng: -93.07};
        var marker6 = {lat: 44.99, lng: -93.28};
        var marker7 = {lat: 44.92, lng: -93.25};
        var marker8 = {lat: 44.91, lng: -93.5};
        var marker9 = {lat: 44.9, lng: -93};
        var marker10 = {lat: 44.98, lng: -93.2};

        var map = new google.maps.Map(document.getElementById('map'), {
          center: mapCenter,
          zoom: 11
        });
        var marker1 = new google.maps.Marker({
          position: marker1,
          map: map
        });
        var marker2 = new google.maps.Marker({
          position: marker2,
          map: map
        });
        var marker3 = new google.maps.Marker({
          position: marker3,
          map: map
        });
        var marker4 = new google.maps.Marker({
          position: marker4,
          map: map
        });
        var marker5 = new google.maps.Marker({
          position: marker5,
          map: map
        });
        var marker6 = new google.maps.Marker({
          position: marker6,
          map: map
        });
        var marker7 = new google.maps.Marker({
          position: marker7,
          map: map
        });
        var marker8 = new google.maps.Marker({
          position: marker8,
          map: map
        });
        var marker9 = new google.maps.Marker({
          position: marker9,
          map: map
        });
        var marker10 = new google.maps.Marker({
          position: marker10,
          map: map
        });
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
    