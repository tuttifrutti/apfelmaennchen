(function ($, Calculator, Renderer) {
	"use strict";

	var WIDTH = 900;
	var HEIGHT = 600;

	function init() {
		$("#calculate").click(initClickHandler);
	}

	function initClickHandler(e) {
		e.preventDefault();

		var canvas = createCanvas(WIDTH, HEIGHT);
		var calculator = new Calculator(WIDTH, HEIGHT);
		var renderer = new Renderer(WIDTH, HEIGHT);

		var realMin = getValue("#re_min");
		var realMax = getValue("#re_max");
		var imaMin = getValue("#im_min");
		var imaMax = getValue("#im_max");
		var maxAbsolute = getValue("#maxAbsolute");
		var maxIterations = getValue("#maxIterations");

		var image = calculator.calc(realMin, realMax, imaMin, imaMax, maxAbsolute, maxIterations);
		renderer.render(canvas, image, maxIterations);
	}

	function createCanvas(width, height) {
		var canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		$("#canvas").html(canvas);
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
	Apfelmaennchen.Calculator,
	Apfelmaennchen.Renderer
));
