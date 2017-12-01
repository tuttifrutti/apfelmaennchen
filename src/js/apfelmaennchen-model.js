Apfelmaennchen.Model = (function () {
	"use strict";

	function Model() {
		var self = this;

		var ZOOM_FACTOR = 0.75;
		this.currentZoom = 1;

		this.realMin = -2;
		this.realMax = 1;
		this.imaMin = -1;
		this.imaMax = 1;
		this.maxAbsolute = 4;
		this.maxIterations = 1000;

		this.init = function() {
			self.updateView();
		};

		this.zoom = function() {
			self.currentZoom *= ZOOM_FACTOR;

			self.realMin *= self.currentZoom;
			self.realMax *= self.currentZoom;
			self.imaMin *= self.currentZoom;
			self.imaMax *= self.currentZoom;
		};

		this.fetchAndSet = function() {
			self.realMin = getValue("#realMin");
			self.realMax = getValue("#realMax");
			self.imaMin = getValue("#imaMin");
			self.imaMax = getValue("#imaMax");
			self.maxAbsolute = getValue("#maxAbsolute");
			self.maxIterations = getValue("#maxIterations");
			switchImaginaryAxes();
		};

		this.updateView = function() {
			$("#realMin").val(self.realMin);
			$("#realMax").val(self.realMax);
			$("#imaMin").val(self.imaMin);
			$("#imaMax").val(self.imaMax);
			$("#maxAbsolute").val(self.maxAbsolute);
			$("#maxIterations").val(self.maxIterations);
		};

		// TODO axes switched
		function switchImaginaryAxes() {
			var x = self.imaMax * -1;
			self.imaMax = self.imaMin * -1;
			self.imaMin = x;
		}

		function getValue(id) {
			return parseFloat($(id).val());
		}
	}
	return Model;
}(
	$
));
