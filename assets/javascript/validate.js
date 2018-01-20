$().ready(function() {	
	$("#signup-form").validate({
		rules: {
			artist-name-input: "required",
			website-input: "required",
			city-name-input: "required",
			genre-input: "required"
		},
		messages: {
			artist-name-input: "Please enter your name or the name of your band",
			website-input: "Please enter your website link",
			city-name-input: "Please enter your home or base city",
			genre-input: "Please select up to 3 different genres"
		},

		$("select").on("click", "option", function () {
    		if ( 3 <= $(this).siblings(":selected").length ) {
        	$(this).removeAttr("selected");
    		}
		});​​​​​​​​​​
	});
})