(function ($, Calculator, Renderer, Model) {
	"use strict";

	var width = $(window).width();
	var height = width * 0.66;

	var canvas;
	var calculator;
	var renderer;
	var model;

	function init() {
		calculator = new Calculator(width, height);
		renderer = new Renderer(width, height);
		model = new Model();
		model.init();

		$("#calculate").on("click", function (e) {
			e.preventDefault();
			calcApfelmaennchen();
		});
		$("#reset").on("click", function (e) {
			e.preventDefault();
			model.reset();
			calcApfelmaennchen();
		});
		$("#canvas").on("click", function (e) {
			model.zoom();
			calcApfelmaennchen();
			getCursorPosition(e);
		});

		calcApfelmaennchen();
	}

	function calcApfelmaennchen() {
		createCanvas(width, height);
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
