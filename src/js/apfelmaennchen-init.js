(function ($, Calculator, Renderer, Model) {
	"use strict";

	var WIDTH = 900;
	var HEIGHT = 600;

	var canvas;
	var calculator;
	var renderer;
	var model;

	function init() {
		createCanvas(WIDTH, HEIGHT);
		calculator = new Calculator(WIDTH, HEIGHT);
		renderer = new Renderer(WIDTH, HEIGHT);
		model = new Model();
		model.init();

		$("#calculate").on("click", function (e) {
			e.preventDefault();
			calcApfelmaennchen();
		});
		$("#canvas").on("click", function (e) {
			model.zoom();
			calcApfelmaennchen();
			getCursorPosition(e);
		});
	}

	function calcApfelmaennchen() {
		model.fetchAndSet();
		var image = calculator.calc(model.realMin, model.realMax, model.imaMin, model.imaMax, model.maxAbsolute, model.maxIterations);
		renderer.render(canvas, image, model.maxIterations);
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

	$(document).ready(function () {
		init();
	});

}(
	$,
	Apfelmaennchen.Calculator,
	Apfelmaennchen.Renderer,
	Apfelmaennchen.Model
));
