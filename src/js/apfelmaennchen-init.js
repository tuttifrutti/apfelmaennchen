(function ($, Calculator, Renderer) {
	"use strict";

	var WIDTH = 900;
	var HEIGHT = 600;
	var ZOOM_FACTOR = 0.75;

	var zoom = 1;

	var canvas;
	var calculator;
	var renderer;

	function init() {
		createCanvas(WIDTH, HEIGHT);
		calculator = new Calculator(WIDTH, HEIGHT);
		renderer = new Renderer(WIDTH, HEIGHT);

		$("#calculate").on("click", function (e) {
			e.preventDefault();
			calcApfelmaennchen();
		});
		$("#canvas").on("click", function (e) {
			zoom *= ZOOM_FACTOR;
			calcApfelmaennchen();
			getCursorPosition(e);
		});
	}

	function calcApfelmaennchen() {
		var realMin = getValue("#re_min");
		var realMax = getValue("#re_max");
		var imaMin = getValue("#im_min") * -1; // TODO axes switched
		var imaMax = getValue("#im_max") * -1;
		var maxAbsolute = getValue("#maxAbsolute");
		var maxIterations = getValue("#maxIterations");

		var image = calculator.calc(realMin * zoom, realMax * zoom, imaMax * zoom, imaMin * zoom, maxAbsolute, maxIterations);
		renderer.render(canvas, image, maxIterations);
	}

	function getCursorPosition(event) {
		var rect = canvas.getBoundingClientRect();
		var x = event.clientX - rect.left;
		var y = event.clientY - rect.top;
		return {x: x, y: y};
	}

	function createCanvas(width, height) {
		canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		$("#canvas").html(canvas);
		console.log("created canvas", canvas);
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
