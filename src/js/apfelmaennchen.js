De.Apfelmaennchen = (function () {
	"use strict";

	function Apfelmaennchen(canvas) {

		var self = this;
		var width = canvas.width;
		var height = canvas.height;

		var ctx = canvas.getContext('2d');
		var img = ctx.getImageData(0, 0, width, height);
		var pix = img.data;

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

		this.setColor = function (its, maxIterations, ppos) {
			if (its > maxIterations) {
				pix[ppos] = 0;
				pix[ppos + 1] = 0;
				pix[ppos + 2] = 0;
			} else {
				var c = 3 * Math.log(its) / Math.log(maxIterations - 1.0);

				if (c < 1) {
					pix[ppos] = 255 * c;
					pix[ppos + 1] = 0;
					pix[ppos + 2] = 0;
				} else if (c < 2) {
					pix[ppos] = 255;
					pix[ppos + 1] = 255 * (c - 1);
					pix[ppos + 2] = 0;
				} else {
					pix[ppos] = 255;
					pix[ppos + 1] = 255;
					pix[ppos + 2] = 255 * (c - 2);
				}
			}
			pix[ppos + 3] = 255;
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
		 * @param {Number} imaginaryMin Imaginary Minimum
		 * @param {Number} realMax Real Maximum
		 * @param {Number} imaginaryMax Imaginary Maximum
		 * @param {Number} maxAbsolute2
		 * @param {Number} maxIterations Threshold
		 */
		this.calc = function (realMin, realMax, imaginaryMin, imaginaryMax, maxAbsolute2, maxIterations) {
			console.log("START calc Apfelmaennchen\nReal:", realMin, realMax, "\nImaginary:", imaginaryMin, imaginaryMax,
				"\nMaxAbsolute:", maxAbsolute2, "\nMax Iterations:", maxIterations);
			var start = new Date();

			for (var ix = 0; ix < width; ++ix) {
				var x = self.calcRealPart(realMin, realMax, ix);
				for (var iy = 0; iy < height; ++iy) {
					var y = self.calcImaginaryPart(imaginaryMin, imaginaryMax, iy);
					var its = self.calcJulia(x, y, maxAbsolute2, maxIterations);
					var ppos = 4 * (width * iy + ix);

					self.setColor(its, maxIterations, ppos);
				}
			}
			console.log("DONE calc Apfelmaennchen\ntook ", new Date() - start, "ms for ", width * height, "datapoints");
		};

		this.draw = function() {
			ctx.putImageData(img, 0, 0);
		}
	}

	return Apfelmaennchen;
}());
