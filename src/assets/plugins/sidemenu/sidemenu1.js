(function () {
	"use strict";

	var slideMenu = $('.side-menu');

	// Toggle Sidebar
	$(document).on('click','[data-bs-toggle="sidebar"]',function(event) {
		event.preventDefault();
		$('.app').toggleClass('sidenav-toggled');
	});

	$(".app-sidebar").hover(function() {
		if ($('.app').hasClass('sidenav-toggled')) {
			$('.app').addClass('sidenav-toggled1');
		}
	}, function() {
		if ($('.app').hasClass('sidenav-toggled')) {
			$('.app').removeClass('sidenav-toggled1');
		}
	});


	//Mobile menu
	jQuery(document).ready(function($) {
	  var alterClass = function() {
		var ww = document.body.clientWidth;
		if (ww < 739) {
		  $('body').removeClass('sidenav-toggled');
		} else if (ww >= 738) {
		  $('body').addClass('sidenav-toggled');
		};
	  };
	  $(window).resize(function(){
		alterClass();
	  });
	  //Fire it when the page first loads:
	  alterClass();
	});

	// Activate sidebar slide toggle
	$("[data-bs-toggle='slide']").click(function(event) {
		event.preventDefault();
		if(!$(this).parent().hasClass('is-expanded')) {
			slideMenu.find("[data-bs-toggle='slide']").parent().removeClass('is-expanded');
		}
		$(this).parent().toggleClass('is-expanded');
	});

	$("[data-bs-toggle='sub-slide']").click(function(event) {
		event.preventDefault();
		if(!$(this).parent().hasClass('is-expanded')) {
			slideMenu.find("[data-bs-toggle='sub-slide']").parent().removeClass('is-expanded');
		}
		$(this).parent().toggleClass('is-expanded');
		$('.slide.active').addClass('is-expanded');
	});

	// Set initial active toggle
	$("[data-bs-toggle='slide.'].is-expanded").parent().toggleClass('is-expanded');
	$("[data-bs-toggle='sub-slide.'].is-expanded").parent().toggleClass('is-expanded');


	//Activate bootstrip tooltips
	$("[data-bs-toggle='tooltip']").tooltip();


	// ______________Active Class
	$(".app-sidebar li a").each(function() {
	  var pageUrl = window.location.href.split(/[?#]/)[0];
		if (this.href == pageUrl) {
			$(this).addClass("active");
			$(this).parent().addClass("active"); // add active to li of the current link
			$(this).parent().parent().prev().addClass("active"); // add active class to an anchor
			$(this).parent().parent().parent().parent().parent().addClass("active");
			$(this).parent().parent().prev().click(); // click the item to make it drop
		}
	});


})();