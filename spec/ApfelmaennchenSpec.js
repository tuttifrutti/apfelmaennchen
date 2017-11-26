/* eslint-disable */
De = {};
require("../src/js/apfelmaennchen");
/* eslint-enable */

(function (Apfelmaennchen) {
	"use strict";

	describe("Apfelmaennchen", function () {
		var apfelmaennchen = new Apfelmaennchen();

		it("exists", function () {
			expect(apfelmaennchen).toBeDefined();
		});

		it("has functions", function () {
			expect(apfelmaennchen.hasOwnProperty("calc")).toBe(true);

			expect(apfelmaennchen.hasOwnProperty("julia")).toBe(true);
		});
	});
}(
	De.Apfelmaennchen
));
