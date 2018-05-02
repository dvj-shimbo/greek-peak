$(window).on("load", function() {
	"use strict";

	// User's functions

	console.log("scripts.js is loaded");


	$("<div class=\"device-phone\"></div>").appendTo("body");
	$("<div class=\"device-phone-wide\"></div>").appendTo("body");
	$("<div class=\"device-phablet\"></div>").appendTo("body");
	$("<div class=\"device-tablet-small\"></div>").appendTo("body");
	$("<div class=\"device-tablet\"></div>").appendTo("body");
	$("<div class=\"device-tablet-wide\"></div>").appendTo("body");
	$("<div class=\"device-desktop\"></div>").appendTo("body");
	$("<div class=\"device-desktop-wide\"></div>").appendTo("body");




	var  isBreakpoint = function(alias) {
		return $(".device-" + alias).is(":visible");
	};


	



	$("header").click(function(e) {

//		console.log("Header Click");

		if (!isBreakpoint("desktop-wide")) {

//			console.log(e.pageX + "   " + e.pageY);

			var posX = e.pageX;
			var posY = e.pageY;

			if (posX > 15 && posX < 53 && posY > 5 && posY < 43) {

				

				if ($("header.menu-displayed").length) {

//					console.log ("Back");

					$("header").removeClass("menu-displayed");

				} else {

//					console.log ("Burger");

					$("header").addClass("menu-displayed");

				}


			}


		}
		
	});








	function redraw() {
//		console.log("REDRAW");
//		console.log(isBreakpoint("desktop-wide"));
	}

	$(window).resize(function(){
		redraw();
	});

	redraw();

	



});