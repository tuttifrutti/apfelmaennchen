(function ($, Apfelmaennchen) {
	"use strict";

	function init() {
		$("#calculate").click(initClickHandler);
	}

	function initClickHandler(e) {
		e.preventDefault();
		var canvas = createCanvas(900, 600);
		$("#canvas").html(canvas);

		var apfelmaennchen = new Apfelmaennchen(canvas);

		var realMin = getValue("#re_min");
		var realMax = getValue("#re_max");
		var imaMin = getValue("#im_min");
		var imaMax = getValue("#im_max");
		var maxAbsolute = getValue("#maxAbsolute");
		var maxIterations = getValue("#maxIterations");

		apfelmaennchen.calc(realMin, realMax, imaMin, imaMax, maxAbsolute, maxIterations);
		apfelmaennchen.draw();
	}

	function createCanvas(width, height) {
		var canvas = document.createElement('canvas');
		canvas.width = 900;
		canvas.height = 600;
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
