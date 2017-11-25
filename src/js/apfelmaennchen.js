De.Apfelmaennchen = (function () {
	"use strict";

	function Apfelmaennchen() {

		var self = this;

		/**
		 * Juuulia
		 *
		 * @param {Number} x Represents x coordinate
		 * @param {Number} y Represents y coordinate
		 * @param {Number} maxAbsolute2
		 * @param {Number} maxIterations Maximum iterations
		 */
		this.julia = function (x, y, maxAbsolute2, maxIterations) {
			var xadd = x;
			var yadd = y;

			var remainingIterations = maxIterations - 1;
			var xx = x * x;
			var yy = y * y;
			var xy = x * y;
			var absolute2 = xx + yy;

			while (absolute2 <= maxAbsolute2 && remainingIterations--) {
				x = xx - yy + xadd;
				y = xy + xy + yadd;
				xx = x * x;
				yy = y * y;
				xy = x * y;
				absolute2 = xx + yy;
			}

			return maxIterations - remainingIterations;
		};

		this.setColor = function (its, maxIterations, pix, ppos) {
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
		 * Apfel apfel
		 *
		 * @param {any} canvas thing to draw on
		 * @param {Number} realMin Real Minimum
		 * @param {Number} imaginaryMin Imaginary Minimum
		 * @param {Number} realMax Real Maximum
		 * @param {Number} imaginaryMax Imaginary Maximum
		 * @param {Number} maxAbsolute2
		 * @param {Number} maxIterations Threshold
		 */
		this.calc = function (canvas, realMin, realMax, imaginaryMin, imaginaryMax, maxAbsolute2, maxIterations) {
			console.log("START calc Apfelmaennchen\nReal:", realMin, realMax, "\nImaginary:", imaginaryMin, imaginaryMax,
				"\nMaxAbsolute:", maxAbsolute2, "\nMax Iterations:", maxIterations);
			var start = new Date();
			var width = canvas.width;
			var height = canvas.height;

			var ctx = canvas.getContext('2d');
			var img = ctx.getImageData(0, 0, width, height);
			var pix = img.data;

			for (var ix = 0; ix < width; ++ix) {
				var x = realMin + (realMax - realMin) * ix / (width - 1);
				for (var iy = 0; iy < height; ++iy) {
					var y = imaginaryMin + (imaginaryMax - imaginaryMin) * iy / (height - 1);
					var its = self.julia(x, y, maxAbsolute2, maxIterations);
					var ppos = 4 * (width * iy + ix);

					self.setColor(its, maxIterations, pix, ppos);
				}
				ctx.putImageData(img, 0, 0);
			}
			console.log("DONE calc Apfelmaennchen\ntook ", new Date() - start, "ms for ", width * height, "datapoints");
		};
	}

	return Apfelmaennchen;
}());

/* module.exports = {
    apfel: apfel,
    julia: Julia
}; */
