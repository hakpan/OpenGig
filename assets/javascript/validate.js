
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      //alert("Got Here");
      form.addEventListener('submit', function(event) {
        //alert("Test");
        console.log("does it hit");
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
      alert("Got Here 2");
    });
  }, false);
})();


//Will give a warning when you choose more then 3 generes
 var last_valid_selection = null;

      $('#genre-input').change(function(event) {
        if ($(this).val().length > 3) {
          alert('You can only choose 3!');
          $(this).val(last_valid_selection);
        } else {
          last_valid_selection = $(this).val();
        }
      });

 // $("signupForm").validate({
	// rules: {
 // 		artist-name-input: "required"
 // 	}
 // 	messages: {
 // 		artist-name-input: "Please enter your band name"
	// }
 // });
