
/**
 * Juuulia
 *
 * @param {Number} x Represents x coordinate
 * @param {Number} y Represents y coordinate
 * @param {Number} xadd
 * @param {Number} yadd
 * @param {Number} maxAbsolute2
 * @param {Number} maxIterations Maximum iterations
 */
function Julia(x, y, maxAbsolute2, maxIterations) {
    var xadd = x;
    var yadd = y;

    var remainingIterations = maxIterations;
    var xx = x*x;
    var yy = y*y;
    var xy = x*y;
    var absolute2 = xx+yy;

    while ( remainingIterations-- && absolute2 <= maxAbsolute2 ) {
        x = xx - yy + xadd;
        y = xy + xy + yadd;
        xx = x*x;
        yy = y*y;
        xy = x*y;
        absolute2 = xx + yy;
    }

    return maxIterations - remainingIterations;
}

/**
 * Apfel apfel
 *
 * @param {Number} realMin Real Minimum
 * @param {Number} Imaginary Minimum
 * @param {Number} Real Maximum
 * @param {Number} Imaginary Maximum
 * @param {Number} maxAbsolute2
 * @param {Array} xPixels
 * @param {Array} yPixels
 * @param {Number} maxIterations Threshold
 */
function apfel(canvas, realMin, imaginaryMin, realMax, imaginaryMax, maxAbsolute2, maxIterations) {
    var width = canvas.width;
    var height = canvas.height;

    var ctx = canvas.getContext('2d');
    var img = ctx.getImageData(0, 0, width, height);
    var pix = img.data;

    var cReal, cImaginary, its, color;
    console.log('Do the \'apfel\'');

    for (var ix = 0 ; ix < width ; ++ix) {
        for (var iy = 0; iy < height ; ++iy) {
            var x = xmin + (xmax - xmin) * ix / (width - 1);
            var y = ymin + (ymax - ymin) * iy / (height - 1);
            var its = Julia(x, y, maxIterations);
            var ppos = 4 * (width * iy + ix);

            if (its > maxIterations) {
               pix[ppos] = 0;
               pix[ppos + 1] = 0;
               pix[ppos + 2] = 0;
             } else {
               var c = 3 * Math.log(i) / Math.log(iterations - 1.0);

               if (c < 1) {
                 pix[ppos] = 255 * c;
                 pix[ppos + 1] = 0;
                 pix[ppos + 2] = 0;
               } else if ( c < 2 ) {
                 pix[ppos] = 255;
                 pix[ppos + 1] = 255 * (c - 1);
                 pix[ppos + 2] = 0;
               } else {
                 pix[ppos] = 255;
                 pix[ppos + 1] = 255;
                 pix[ppos + 2] = 255 * (c - 2);
               }
           }
           pix[ppos + 3] = 255;
        }
        ctx.putImageData(img, 0, 0);
    }
}

module.exports =  {
    apfel: apfel,
    julia: Julia
};
