'use strict';

const gpagespeed = require('gpagespeed');

module.exports = {
  analyzeUrl: function(url, log, options) {
    const args = { url };

    if (options.gpsi && options.gpsi.key) {
      args.key = options.gpsi.key;
    } else {
      args.nokey = true;
    }

    args.apiversion = 'v5';
    args.strategy = 'desktop';

    if (options.mobile) {
      args.strategy = 'mobile';
    }
    log.info(`Sending url ${url} to test on Page Speed Insights with args ${JSON.stringify(args)}`);
    return gpagespeed(args);
  }
};
