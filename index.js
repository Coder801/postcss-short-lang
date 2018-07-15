var postcss = require('postcss');

module.exports = postcss.plugin('postcss-short-lang', function () {
    return function (css) {
        css.walkRules(function (rule) {
            // Walk each pseudoclass 'lang'
            if (rule.selector.indexOf(':lang') !== -1) {
                const unfolding = [];

                rule.selectors.forEach(function (selector) {
                    const langs = selector
                        .match(/:lang\s?\((.*)\)/)[1]
                        .split(',');

                    // Check language-code if more than one
                    if (langs.length > 1) {
                        langs.forEach(lang => {
                            unfolding.push(
                                selector.replace(/\(.*\)/, `(${lang.trim()})`)
                            );
                        });
                    }
                });

                rule.selectors = unfolding;
            }
        });
    };
});
