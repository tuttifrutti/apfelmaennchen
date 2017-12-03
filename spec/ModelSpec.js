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

		it("zooms it", function () {
			model.zoom();

			expect(model.imaMin).toBe(-0.75);

			expect(model.imaMax).toBe(0.75);
		});

		describe("move()", function () {
			var TEST_VALUES = [
				[[0, 300], [-3.5, -0.5, -1, 1]],
				[[900, 300], [-0.5, 2.5, -1, 1]],
				[[450, 300], [-2, 1, -1, 1]],
				[[450, 0], [-2, 1, -2, 0]],
				[[450, 600], [-2, 1, 0, 2]]
			];

			TEST_VALUES.forEach(function (value) {
				it("moves it", function () {
					var canPos = value[0];
					var apfelPos = value[1];

					model.move(canPos[0], canPos[1]);

					expect(model.realMin).toBe(apfelPos[0]);

					expect(model.realMax).toBe(apfelPos[1]);

					expect(model.imaMin).toBe(apfelPos[2]);

					expect(model.imaMax).toBe(apfelPos[3]);
				});
			});
		});
	});

}(
	Apfelmaennchen.Model
));
