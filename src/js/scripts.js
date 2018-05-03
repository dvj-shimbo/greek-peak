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

				

//				if ($("header.menu-displayed").length) {
				if ($("header").hasClass("menu-displayed")) {

//					console.log ("Back");

					if ($("header ul:last-child li.selected").length) {
						$("header ul:last-child li.selected").removeClass("selected");
					} else {
						$("header").removeClass("menu-displayed");
					}

					

				} else {

//					console.log ("Burger");

					$("header").addClass("menu-displayed");

				}


			}


		}
		
	});


	$("header ul:last-child p").click(function() {
		if ($(this).next().hasClass("container-fluid")) {
			var li = $(this).parent();
			if (li.hasClass("selected")) {

				$("header ul:last-child li.selected").removeClass("selected");

//				$("header").removeClass("menu-displayed");

//				li.removeClass("selected");



			} else {

				$("header ul:last-child li.selected").removeClass("selected");
				
				if (!$("header").hasClass("menu-displayed")) {
					$("header").addClass("menu-displayed");
				}
				
				li.addClass("selected");

				

			}
		}
	});








	function redraw() {
//		console.log("REDRAW");
//		console.log(isBreakpoint("desktop-wide"));
//		console.log($("header ul:first-child ~ .button").css("left"));
//		$("header ul:first-child ~ .button").css("left", 18);
	}

	$(window).resize(function(){
		redraw();
	});

	redraw();

	



});