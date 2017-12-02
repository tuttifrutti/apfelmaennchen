(function ($, Controller) {
	"use strict";

	var ASPECT_RATIO = 2 / 3.0;

	var width;
	var height;

	var controller;

	function init() {
		calcWidthAndHeight();
		controller = new Controller(width, height);
		controller.init();
	}

	function calcWidthAndHeight() {
		width = $(window).width();
		height = Math.floor(width * ASPECT_RATIO);

		if (height > $(window).height()) {
			height = $(window).height();
			width = Math.floor(height / ASPECT_RATIO);
		}
	}

	$(document).ready(function () {
		init();
	});

}(
	$,
	Apfelmaennchen.Controller
));
