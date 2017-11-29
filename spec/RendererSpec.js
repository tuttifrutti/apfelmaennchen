/* eslint-disable */
Apfelmaennchen = {};
require("../src/js/apfelmaennchen-renderer");
/* eslint-enable */

(function (Renderer) {
	"use strict";

	describe("Renderer", function () {
		var renderer = new Renderer(3, 2);

		it("exists", function () {
			expect(renderer).toBeDefined();
		});
	});

}(
	Apfelmaennchen.Renderer
));
