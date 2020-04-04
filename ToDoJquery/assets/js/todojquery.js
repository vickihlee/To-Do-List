// done with task -> turn it gray & striked out
// $("li").click(function() {
// 	$(this).css("color", "gray");
// 	$(this).css("text-decoration", "line-through");
// });

// $("li").click(function() {
// 	// if li is gray, turn it black, else gray
// 	if ($(this).css("color") === "rgb(128, 128, 128)") {
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none" // can't use hyphens in JS. need to capitalize D to work
// 		});	
// 	}
// 	else {
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through" // can't use hyphens in JS. need to capitalize D to work
// 		});		
// 	}
// });

// $("li").click(function() {
// 	$(this).toggleClass("completed");
// });

// done
$("ul").on("click", "li", function() { // use ul so it accounts for future li clicks
	$(this).toggleClass("completed");
});

// delete
$("ul").on("click", "span", function(event) { // event = any event outside span directly
	$(this).parent().fadeOut(500, function() { // put remove within function so remove occurs after fadeout completes
		$(this).remove(); //parent() removes LI. without it, removes X	
	});
	event.stopPropagation(); // stop firing after span. stop li => container -> body to fire ("bubbling")
});

// add
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) { // 13 = enter key
		// grabbing new todo text from input
		var todoText = $(this).val(); // val = value of input
		// clear input after entered
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
});

// click on plus sign
$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});