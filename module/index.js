const RATE = -0.246871374;

module.exports = function previewCovid(t) {
  if (t <= 1) {
    return 0;
  }

  const preview = Math.floor(100004 / (2 + 50000 * Math.exp(RATE * t)));

  return preview;
};
