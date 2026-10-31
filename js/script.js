// If you already know your way around HTML and CSS, stretch yourself by taking https://www.w3schools.com/jquery/ for a spin, using this file to practice

// <-- the computer will ignore any content that is preceeded by double slashes. Remove the slashes to sure the code

// This pop up alert will let you know that the path from your .html to .js file 
// is correct.  Uncomment the line below to test it out. Feel free to remove it or comment it out if it gets irksome.
// alert("Congrats, the path from your .html to .js file is correct");


$(document).ready(function() {
	$('button').click(function() {
		$("div").slideUp(3000);	


   	 });

// Cut and paste some of the contents in $; delimiters below into the line below this one to see what they do



	//  $("p.choice").delay(9000).fadeOut(3000); 

	//  $("div#a").toggle(10000);


	// $("p").before("here's a little 'before' text");



	// $("div").css("opacity", "0.2");
	// or
	// $("p").css("background", "yellow");
	// or
	// $("p:nth-child(2)").css("border", "3px solid red");



	// $("p").wrap("<i></i>");





	// $("div").slideUp(3000);


	// $("p").prepend("<p>Here's a little 'prepended' paragraph</p>");


	// $("p").html("<img src='http:\//upload.wikimedia.org/wikipedia/commons/9/96/Pair_of_Merops_apiaster_feeding.jpg' height='200'>");


	// you can also chain your methods together, adding one after the other concluding with a semicolon. Some methods, like .click and .animate require nested functions:
 	//$("div#d").css("border", "3px solid orange").before("<br/><p>Click on the red square to make it disappear<p>").click(function(){
	// 			$(this).css("border", "3px solid red").slideUp(3000);
	// 		});

   });

