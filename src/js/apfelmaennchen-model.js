Apfelmaennchen.Model = (function () {
	"use strict";

	function Model(width, height) {
		var self = this;

		var ZOOM_FACTOR = 0.75;

		this.init = function () {
			self.reset();
		};

		this.reset = function () {
			this.currentZoom = 1;

			this.realMin = -2;
			this.realMax = 1;
			this.imaMin = -1;
			this.imaMax = 1;
			this.maxAbsolute = 4;
			this.maxIterations = 1000;
		};

		this.zoom = function () {
			self.currentZoom *= ZOOM_FACTOR;

			self.realMin *= self.currentZoom;
			self.realMax *= self.currentZoom;
			self.imaMin *= self.currentZoom;
			self.imaMax *= self.currentZoom;
		};

		function translateX(x) {
			var xNorm = x / width;
			return translate(xNorm, self.realMin, self.realMax);
		}

		function translateY(y) {
			var yNorm = y / height;
			return translate(yNorm, self.imaMin, self.imaMax);
		}

		function translate(norm, min, max) {
			return (norm * (max - min)) + min;
		}

		function calcDimension() {
			return [self.realMax - self.realMin, self.imaMax - self.imaMin];
		}

		this.move = function (x, y) {
			var centerX = translateX(x);
			var centerY = translateY(y);
			var dimension = calcDimension();

			self.realMin = centerX - (dimension[0] / 2);
			self.realMax = centerX + (dimension[0] / 2);
			self.imaMin = centerY - (dimension[1] / 2);
			self.imaMax = centerY + (dimension[1] / 2);
		};
	}

	return Model;
}());
