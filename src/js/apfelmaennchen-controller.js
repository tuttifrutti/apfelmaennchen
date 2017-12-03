Apfelmaennchen.Controller = (function (Calculator, Renderer, Model, View) {
	"use strict";

	function Controller(width, height) {
		var canvas;
		var calculator;
		var renderer;
		var model;
		var view;

		this.init = function () {
			createCanvas();
			calculator = new Calculator(width, height);
			renderer = new Renderer(width, height);
			model = new Model(width, height);
			model.init();
			view = new View(model);
			initHandlers();

			view.updateView();
		};

		function initHandlers() {
			$("#calculate").on("click", function (e) {
				e.preventDefault();
				view.fetchAndSet();
				calcApfelmaennchen();
			});
			$("#reset").on("click", function (e) {
				e.preventDefault();
				model.reset();

				calcApfelmaennchen();
			});
			$("#canvas").on("click", function (e) {
				var pos = getCursorPosition(e);
				model.move(pos.x, pos.y);
				// model.zoom();
				calcApfelmaennchen();
			});
		}

		function calcApfelmaennchen() {
			createCanvas(width, height);
			view.updateView();
			var image = calculator.calc(model.realMin, model.realMax, model.imaMin, model.imaMax, model.maxAbsolute, model.maxIterations);
			renderer.render(canvas, image, model.maxIterations);
		}

		function getCursorPosition(event) {
			var rect = canvas.getBoundingClientRect();
			var x = event.clientX - rect.left;
			var y = event.clientY - rect.top;
			return {x: x, y: y};
		}

		function createCanvas() {
			canvas = document.createElement('canvas');
			canvas.width = width;
			canvas.height = height;
			var ctx = canvas.getContext('2d');
			ctx.translate(0, canvas.height);
			ctx.scale(1, -1);
			$("#canvas").html(canvas);
			console.log("created canvas", canvas);
		}
	}

	return Controller;
}(
	Apfelmaennchen.Calculator,
	Apfelmaennchen.Renderer,
	Apfelmaennchen.Model,
	Apfelmaennchen.View
));
