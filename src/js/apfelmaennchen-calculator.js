Apfelmaennchen.Calculator = (function () {
	"use strict";

	function Calculator(width, height) {

		var self = this;

		/**
		 * Calculates the Julia value
		 *
		 * @param {Number} x Represents x coordinate
		 * @param {Number} y Represents y coordinate
		 * @param {Number} maxAbsolute2
		 * @param {Number} maxIterations Maximum iterations
		 */
		this.calcJulia = function (x, y, maxAbsolute2, maxIterations) {
			var xadd = x;
			var yadd = y;

			var remainingIterations = maxIterations - 1;
			var xx = x * x;
			var yy = y * y;
			var xy = x * y;
			var absolute2 = xx + yy;

			while (absolute2 <= maxAbsolute2 && remainingIterations >= 0) {
				remainingIterations -= 1;
				x = xx - yy + xadd;
				y = xy + xy + yadd;
				xx = x * x;
				yy = y * y;
				xy = x * y;
				absolute2 = xx + yy;
			}

			return maxIterations - remainingIterations;
		};

		/**
		 * calculates the real part of the complex number for a point
		 *
		 * @param realMin
		 * @param realMax
		 * @param ix
		 * @returns {*}
		 */
		this.calcRealPart = function (realMin, realMax, ix) {
			return realMin + (realMax - realMin) * ix / (width - 1);
		};

		/**
		 * calculates the imaginary part of the complex number for a point
		 *
		 * @param imaginaryMin
		 * @param imaginaryMax
		 * @param iy
		 * @returns {*}
		 */
		this.calcImaginaryPart = function (imaginaryMin, imaginaryMax, iy) {
			return imaginaryMin + (imaginaryMax - imaginaryMin) * iy / (height - 1);
		};

		/**
		 * Calculates the Mandelbrot (Apfelmaennchen) set
		 *
		 * @param {Number} realMin Real Minimum
		 * @param {Number} imaMin Imaginary Minimum
		 * @param {Number} realMax Real Maximum
		 * @param {Number} imaMax Imaginary Maximum
		 * @param {Number} maxAbsolute2
		 * @param {Number} maxIterations Threshold
		 */
		this.calc = function (realMin, realMax, imaMin, imaMax, maxAbsolute2, maxIterations) {
			console.log("START calc Apfelmaennchen\nReal:", realMin, realMax, "\nImaginary:", imaMin, imaMax,
				"\nMaxAbsolute:", maxAbsolute2, "\nMax Iterations:", maxIterations);
			var start = new Date();
			var image = [];

			for (var ix = 0; ix < width; ++ix) {
				var x = self.calcRealPart(realMin, realMax, ix);
				var row = [];
				for (var iy = 0; iy < height; ++iy) {
					var y = self.calcImaginaryPart(imaMin, imaMax, iy);
					var its = self.calcJulia(x, y, maxAbsolute2, maxIterations);
					row.push(its);
				}
				image.push(row);
			}
			console.log("DONE calc Apfelmaennchen\ntook ", new Date() - start, "ms for ", width * height, "datapoints");
			return image;
		};
	}

	return Calculator;
}());
