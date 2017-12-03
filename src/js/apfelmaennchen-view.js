Apfelmaennchen.View = (function ($) {
	"use strict";

	function View(model) {
		this.fetchAndSet = function () {
			model.realMin = getValue("#realMin");
			model.realMax = getValue("#realMax");
			model.imaMin = getValue("#imaMin");
			model.imaMax = getValue("#imaMax");
			model.maxAbsolute = getValue("#maxAbsolute");
			model.maxIterations = getValue("#maxIterations");
		};

		this.updateView = function () {
			$("#realMin").val(model.realMin);
			$("#realMax").val(model.realMax);
			$("#imaMin").val(model.imaMin);
			$("#imaMax").val(model.imaMax);
			$("#maxAbsolute").val(model.maxAbsolute);
			$("#maxIterations").val(model.maxIterations);
		};

		function getValue(id) {
			return parseFloat($(id).val());
		}
	}

	return View;
}(
	$
));
