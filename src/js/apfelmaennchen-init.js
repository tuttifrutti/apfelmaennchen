(function ($, Apfelmaennchen) {
	"use strict";

	var WIDTH = 900;
	var HEIGHT = 600;

	function init() {
		$("#calculate").click(initClickHandler);
	}

	function initClickHandler(e) {
		e.preventDefault();

		var canvas = createCanvas(WIDTH, HEIGHT);
		$("#canvas").html(canvas);

		var apfelmaennchen = new Apfelmaennchen(WIDTH, HEIGHT);

		var realMin = getValue("#re_min");
		var realMax = getValue("#re_max");
		var imaMin = getValue("#im_min");
		var imaMax = getValue("#im_max");
		var maxAbsolute = getValue("#maxAbsolute");
		var maxIterations = getValue("#maxIterations");

		var image = apfelmaennchen.calc(realMin, realMax, imaMin, imaMax, maxAbsolute, maxIterations);
		apfelmaennchen.draw(canvas, image, maxIterations);
	}

	function createCanvas(width, height) {
		var canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		console.log("created canvas", canvas);
		return canvas;
	}

	function getValue(id) {
		return parseFloat($(id).val());
	}

	$(document).ready(function () {
		init();
	});

}(
	$,
	De.Apfelmaennchen
));
