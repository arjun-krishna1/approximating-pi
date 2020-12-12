const madhava_leibniz_series_pack = require("./madhava_leibniz_series");
const madhava_leibniz_series_approx =
  madhava_leibniz_series_pack.madhava_leibniz_series_approx;

const num_iter = 100;
for (let index = 0; index < num_iter; index++) {
    console.log(madhava_leibniz_series_approx(index));
}