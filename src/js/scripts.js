$(window).on("load", function() {
	"use strict";

	// User's functions

	console.log("scripts.js is loaded");

	var  isBreakpoint = function(alias) {
		return $(".device-" + alias).is(":visible");
	};

	$("<div class=\"device-phone\"></div>").appendTo("body");
	$("<div class=\"device-phone-wide\"></div>").appendTo("body");
	$("<div class=\"device-phablet\"></div>").appendTo("body");
	$("<div class=\"device-tablet-small\"></div>").appendTo("body");
	$("<div class=\"device-tablet\"></div>").appendTo("body");
	$("<div class=\"device-tablet-wide\"></div>").appendTo("body");
	$("<div class=\"device-desktop\"></div>").appendTo("body");
	$("<div class=\"device-desktop-wide\"></div>").appendTo("body");

	var headerMouseOver = false;

	$("header").mouseover(function() {
		headerMouseOver = true;
	});

	$("header").mouseout(function() {
		headerMouseOver = false;
	});

	$(document).click(function() {
		if ($("header").hasClass("menu-displayed")) {
			if (!headerMouseOver) {
				$("header ul:last-child li.selected").removeClass("selected");
				$("header").removeClass("menu-displayed");
			}
		}
	});

	$("header").click(function(e) {
		if (!isBreakpoint("desktop-wide")) {
			var posX = e.pageX;
			var posY = e.pageY;
			if (posX > 15 && posX < 53 && posY > 5 && posY < 43) {
				if ($("header").hasClass("menu-displayed")) {

					if ($("header ul:last-child li.selected").length) {
						$("header ul:last-child li.selected").removeClass("selected");
					} else {
						$("header").removeClass("menu-displayed");
					}
				} else {
					$("header").addClass("menu-displayed");
				}

			} else if (!isBreakpoint("tablet-wide")) {
				if (posX > 260) {
					$("header ul:last-child li.selected").removeClass("selected");
					$("header").removeClass("menu-displayed");
				}
			}
		}
	});

	$("header ul:last-child p").click(function() {
		if ($(this).next().hasClass("container-fluid")) {
			var li = $(this).parent();
			if (li.hasClass("selected")) {
				$("header ul:last-child li.selected").removeClass("selected");
			} else {
				$("header ul:last-child li.selected").removeClass("selected");
				if (!$("header").hasClass("menu-displayed")) {
					$("header").addClass("menu-displayed");
				}
				li.addClass("selected");
			}
		}
	});

	$("header form").click(function() {
		if (!$(this).hasClass("displayed")) {
			$(this).addClass("displayed");
			$(this).find("input").focus();
		}
	});

	var headerFormButtonMouseOver = false;

	$("header form button").mouseover(function() {
		headerFormButtonMouseOver = true;
	});

	$("header form button").mouseout(function() {
		headerFormButtonMouseOver = false;
	});

	$("header form input").blur(function() {
		if (!headerFormButtonMouseOver) {
			$("header form").removeClass("displayed");
		}	
	});


	
	$('.book-accommodation input[type="text"]').datepicker();

/*
	$(".book-accommodation .input-wrapper").click(function() {
		$('.book-accommodation input[type="text"]').datepicker("show");
	});
*/









/*
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
*/
	



});