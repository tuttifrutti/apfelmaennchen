Apfelmaennchen.Renderer = (function () {
	"use strict";

	function Renderer(width, height) {
		var self = this;

		this.setColor = function (its, maxIterations, ppos, pix) {
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

		this.render = function (canvas, image, maxIterations) {
			console.log("START render Apfelmaennchen");
			var start = new Date();
			var ctx = canvas.getContext('2d');
			var img = ctx.getImageData(0, 0, width, height);
			var pix = img.data;
			for (var ix = 0; ix < width; ++ix) {
				for (var iy = 0; iy < height; ++iy) {
					var ppos = 4 * (width * iy + ix);
					self.setColor(image[ix][iy], maxIterations, ppos, pix);
				}
			}
			ctx.putImageData(img, 0, 0);
			console.log("DONE render Apfelmaennchen\ntook ", new Date() - start, "ms");
		};
	}

	return Renderer;
}());
