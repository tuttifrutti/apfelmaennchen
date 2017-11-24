
/*
FUNCTION Julia (x, y, xadd, yadd, max_betrag_2: double, max_iter: integer): integer
  remain_iter = max_iter
  xx = x*x
  yy = y*y
  xy = x*y
  betrag_2 = xx + yy

  WHILE (betrag_2 <= max_betrag_2) AND (remain_iter > 0)
    remain_iter = remain_iter - 1
    x  = xx - yy + xadd
    y  = xy + xy + yadd
    xx = x*x
    yy = y*y
    xy = x*y
    betrag_2 = xx + yy
  END

  Julia = max_iter - remain_iter
END FUNCTION*/


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
function Julia(x, y, xadd, yadd, maxAbsolute2, maxIterations) {
    var remainingIterations = maxIterations;
    var xx = x*x;
    var yy = y*y;
    var xy = x*y;
    var absolute2 = xx+yy;

    while (absolute2 <= maxAbsolute2 && remainingIterations > 0) {
        remainingIterations--;
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
function apfel(realMin, imaginaryMin, realMax, imaginaryMax,
                maxAbsolute2, xPixels, yPixels, maxIterations) {
    var cReal, cImaginary, iterations, color;
    var xLen = xPixels.length;
    var yLen = yPixels.length;
    console.log('Do the \'apfel\'');

    yPixels.forEach(function(y) {
        cImaginary = imaginaryMin + (imaginaryMax-imaginaryMin) * y / yLen;
        xPixels.forEach(function(x) {
            cReal = realMin + (realMax-realMin) * x / xLen;
            iterations = Julia(cReal, cImaginary, cReal, cImaginary, maxAbsolute2, maxIterations);
            console.log("Iterations", iterations);
            //color = chooseColor(iterations, maxIterations);
            //plot(x, y, color);
        });
    });
}

/* PROCEDURE Apfel (re_min, im_min, re_max, im_max, max_betrag_2: double,
                 xpixels, ypixels, max_iter: integer)
  FOR y = 0 TO ypixels-1
    c_im = im_min + (im_max-im_min)*y/ypixels

    FOR x = 0 TO xpixels-1
      c_re = re_min + (re_max-re_min)*x/xpixels

      iterationen = Julia (c_re, c_im, c_re, c_im, max_betrags_2, max_iter)
      farb_wert   = waehle_farbe (iterationen, max_iter)
      plot (x, y, farb_wert)
    NEXT

  NEXT
END PROCEDURE*/

module.exports = apfel;
