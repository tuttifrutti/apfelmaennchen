
/**
 * Juuulia
 *
 * @param {Number} x Represents x coordinate
 * @param {Number} y Represents y coordinate
 * @param {Number} maxAbsolute2
 * @param {Number} maxIterations Maximum iterations
 */
function Julia(cx, cy, maxAbsolute2, maxIterations) {
    var x = 0.0;
    var y = 0.0;
    var xx = 0;
    var yy = 0;
    var xy = 0;

    var remainingIterations = maxIterations;
    var absolute2 = xx+yy;

    while ( remainingIterations-- && absolute2 <= maxAbsolute2 ) {
        xy = x * y;
        xx = x * x;
        yy = y * y;
        x = xx - yy + cx;
        y = xy + xy + cy;
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
function apfel(canvas, realMin, realMax, imaginaryMin, imaginaryMax, maxAbsolute2, maxIterations) {
    var width = canvas.width;
    var height = canvas.height;

    var ctx = canvas.getContext('2d');
    var img = ctx.getImageData(0, 0, width, height);
    var pix = img.data;

    var cReal, cImaginary, its, color;
    console.log('Do the \'apfel\'');

    for (var ix = 0 ; ix < width ; ++ix) {
        for (var iy = 0; iy < height ; ++iy) {
            var x = realMin + (realMax - realMin) * ix / (width - 1);
            var y = imaginaryMin + (imaginaryMax - imaginaryMin) * iy / (height - 1);
            var its = Julia(x, y, maxAbsolute2, maxIterations);
            var ppos = 4 * (width * iy + ix);

            if (its > maxIterations) {
               pix[ppos] = 0;
               pix[ppos + 1] = 0;
               pix[ppos + 2] = 0;
             } else {
               var c = 3 * Math.log(its) / Math.log(maxIterations - 1.0);

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

/*module.exports =  {
    apfel: apfel,
    julia: Julia
};*/
