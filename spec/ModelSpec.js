/* eslint-disable */
Apfelmaennchen = {};
require("../src/js/apfelmaennchen-model");
/* eslint-enable */

(function (Model) {
	"use strict";

	describe("Model", function () {
		var model = new Model(900, 600);

		beforeEach(function() {
			model.reset();
		});

		it("exists", function () {
			expect(model).toBeDefined();
		});

		it("switches imaginary axes", function () {
			model.switchImaginaryAxes();

			expect(model.imaMin).toBe(-1);

			expect(model.imaMax).toBe(1);
		});

		it("zooms it", function () {
			model.zoom();

			expect(model.imaMin).toBe(-0.75);

			expect(model.imaMax).toBe(0.75);
		});

		describe("translate()", function () {
			var TEST_VALUES = [
				[[0, 0], [-2, 1]],
				[[900, 600], [1, -1]],
				[[450, 300], [-0.5, 0]],
				[[900, 0], [1, 1]],
				[[0, 600], [-2, -1]]
			];

			TEST_VALUES.forEach(function (value) {
				it("translates x " + value, function () {
					var canPos = value[0];
					var apfelPos = value[1];

					var resultX = model.translateX(canPos[0]);

					expect(resultX).toBe(apfelPos[0]);
				});

				it("translates y " + value, function () {
					var canPos = value[0];
					var apfelPos = value[1];

					var resultY = model.translateY(canPos[1]);

					expect(resultY).toBe(apfelPos[1]);

				});
			});
		});
	});

}(
	Apfelmaennchen.Model
));
