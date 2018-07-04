var postcss = require('postcss');

module.exports = postcss.plugin('postcss-langshort', function (opts) {
    opts = opts || {};

    const processor = postcss();

    return function (root, result) {

      rule.walkDecls(function(decl) {
        console.log(decl)
      });
    };
});
