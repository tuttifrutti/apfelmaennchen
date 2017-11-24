$(document).ready(function () {
	$("#calculate").click(function(e) {
		e.preventDefault();
		console.log("calculate");

		var xPixels = _.range(1, 100);
		var yPixels = _.range(1, 100);
		apfel($("#re_min").val(), $("#im_min").val(), $("#re_max").val(), $("#im_max").val(), 2, xPixels, yPixels, 100);
	});
});