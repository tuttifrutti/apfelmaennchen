/* eslint-disable */
Apfelmaennchen = {};
require("../src/js/apfelmaennchen-calculator");
/* eslint-enable */

(function (Calculator) {
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

	describe("Calculator", function () {
		var calculator = new Calculator(3, 2);

		it("exists", function () {
			expect(calculator).toBeDefined();
		});

		describe("Julia", function () {
			it("has property", function () {
				expect(calculator.hasOwnProperty("calcJulia")).toBe(true);
			});

			TEST_VALUES.forEach(function (value) {
				it("calculates julia", function () {
					var its = calculator.calcJulia.apply(this, value.args);

					expect(its).toBe(value.result);
				});
			});

		});
	});

}(
	Apfelmaennchen.Calculator
));
