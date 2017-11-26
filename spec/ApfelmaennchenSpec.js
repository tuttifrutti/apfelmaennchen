/* eslint-disable */
De = {};
require("../src/js/apfelmaennchen");
/* eslint-enable */

(function (Apfelmaennchen) {
	"use strict";

	var TEST_VALUES = [{
		args: [-2, -1, 4, 1000],
		result: 1
	}, {
		args: [-2, 1, 4, 1000],
		result: 1
	}, {
		args: [-1, -1, 4, 1000],
		result: 3
	}, {
		args: [-1, 1, 4, 1000],
		result: 3
	}, {
		args: [0, -1, 4, 1000],
		result: 1001
	}, {
		args: [0, 1, 4, 1000],
		result: 1001
	}, {
		args: [1, -1, 4, 1000],
		result: 2
	}, {
		args: [1, 1, 4, 1000],
		result: 2
	}];

	describe("Apfelmaennchen", function () {
		var apfelmaennchen = new Apfelmaennchen();

		it("exists", function () {
			expect(apfelmaennchen).toBeDefined();
		});

		describe("Julia", function () {
			it("has property", function () {
				expect(apfelmaennchen.hasOwnProperty("julia")).toBe(true);
			});

			TEST_VALUES.forEach(function (value) {
				it("calculates julia", function () {
					var its = apfelmaennchen.julia.apply(this, value.args);

					expect(its).toBe(value.result);
				});
			});

		});
	});

}(
	De.Apfelmaennchen
));
