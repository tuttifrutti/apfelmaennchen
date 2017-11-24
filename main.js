$(document).ready(function () {
    $("#calculate").click(function(e) {
        e.preventDefault();
        console.log("calculate");

        var canvas = document.createElement('canvas');
        canvas.width = 900;
        canvas.height = 600;

        $("#canvas").html(canvas);
        var realMin = parseInt($("#re_min").val(), 10);
        var realMax = parseInt($("#re_max").val(), 10);
        var imaMin = parseInt($("#im_min").val(), 10);
        var imaMax = parseInt($("#im_max").val(), 10);

        apfel(canvas, realMin, realMax, imaMin, imaMax, 4, 1000);
    });
});
