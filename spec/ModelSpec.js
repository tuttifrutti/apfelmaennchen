/* eslint-disable */
$ = {}; // TODO ugly
Apfelmaennchen = {};
require("../src/js/apfelmaennchen-model");
/* eslint-enable */

(function (Model) {
	"use strict";

	describe("Model", function () {
		var model = new Model();

		it("exists", function () {
			expect(model).toBeDefined();
		});
	});

}(
	Apfelmaennchen.Model
));
