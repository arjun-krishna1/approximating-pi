function madhava_leibniz_series_approx(num_iter) {
  /* 
  Use the Madhava-Leibniz series to approximate pi using num_iter iterations
  */

  // num_iter is a minimum of 1
  if (num_iter < 0) num_iter = 0;

  // infinite series approximation
  let inf_series_approx = 1;

  // initialize variables for the infinite series approximation
  let first_denominator_factor = 3;
  let second_denominator_factor = 3;
  let this_term_negative = true;

  // approximate terms of the infinite series
  for (let index = 0; index < num_iter; index++) {
    const new_term_denominator = (first_denominator_factor * second_denominator_factor)
    
    let new_term = 1/ new_term_denominator;

    if (this_term_negative) {
      inf_series_approx = inf_series_approx - new_term;
    }

    else {
      inf_series_approx = inf_series_approx + new_term;
    }

    first_denominator_factor = first_denominator_factor + 2;
    second_denominator_factor = second_denominator_factor * 3;
    this_term_negative = ! this_term_negative;
  }

  // multiply the infinite series approximation by the constant
  const pi_approx = ( Math.sqrt(12) ) * inf_series_approx;

  // return approximation
  return pi_approx;
}

module.exports = { madhava_leibniz_series_approx };