$(document).ready(function () {
    $("#calculate").click(function(e) {
        e.preventDefault();
        console.log("calculate");
        
        apfel($("#re_min").val(), $("#re_max").val(), $("#im_min").val(), $("#im_max").val(), 2, xPixels, yPixels, 100);
    });
});
