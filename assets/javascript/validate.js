
	$(document).ready(function() {

      var last_valid_selection = null;

      $('#genre-input').change(function(event) {
        if ($(this).val().length > 3) {
          alert('You can only choose 3!');
          $(this).val(last_valid_selection);
        } else {
          last_valid_selection = $(this).val();
        }
      });
    });
// $("signupForm").validate({
// 	rules: {
// 		artist-name-input: "required"
// 	}
// 	messages: {
// 		artist-name-input: "Please enter your band name"
// 	}
// });