describe("Apfelmaenchen", function () {
	var apfelmaenchen = require('../apfelmaenchen');

	it("calculate apfel", function () {
		apfelmaenchen.apfel(1, 1, 2, 2, 2, [0, 1, 2], [0, 1, 2], 3);
	});

	it("calculate julia", function () {
		apfelmaenchen.Julia(1, 1, 1, 1, 2, 3);
	});
});
