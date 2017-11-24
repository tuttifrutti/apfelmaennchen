$(document).ready(function () {
	$("#calculate").click(function(e) {
		e.preventDefault();
		console.log("calculate");

		var canvas = document.createElement('canvas');
		canvas.width = 900;
		canvas.height = 600;
		$("#canvas").html(canvas);

		apfel(canvas, $("#re_min").val(), $("#im_min").val(), $("#re_max").val(), $("#im_max").val(), 2, 100);
	});
});