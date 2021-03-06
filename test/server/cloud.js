
var _ = require('underscore')
  , Cloud = require('mocha-cloud');


/**
 * Cloud.
 */

var cloud = new Cloud(
  'Analytics.js',
  process.env.SAUCE_USERNAME,
  process.env.SAUCE_ACCESS_KEY
);

cloud.browser('internet explorer', '8', 'Windows 2003');
cloud.url('http://dl.dropbox.com/u/8040/analytics.js/test/core.html');
cloud.on('end', function (browser, res) {});


/**
 * Start.
 */

cloud.start(function (err, res) {
  if (err) return;
  _.each(res, function (result) {
    console.log(result.failures);
    _.each(result.failed, console.log);
  });
});

