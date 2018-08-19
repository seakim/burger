
$(function () {  // everything has to be in the anonymous function. WHY?

    $("#submit").on("click", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger_name").val().trim(),
            devoured: 0
        }
        // console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created a new burger");
                // Reload the page to get the updated list
				location.reload();
            }
        )
    });
});
