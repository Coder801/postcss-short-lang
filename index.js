var postcss = require('postcss');

module.exports = postcss.plugin('postcss-langshort', function () {

    return function (css) {
        css.walkRules(function (rule) {
            if (rule.selector.indexOf(':lang') !== -1) {
                var newSelector = [];
                rule.selectors.forEach(function (selector) {
                    if (selector.indexOf(':lang') !== -1) {
                        const langsString = selector.match(
                            /:lang\s?\((.*)\)/
                        )[1];
                        const langs = langsString.split(',');

                        langs.forEach(lang => {
                            newSelector.push(
                                selector.replace(/\(.*\)/, `(${lang.trim()})`)
                            );
                        });
                    }
                });

                rule.selectors = newSelector;
            }
        });
    };
});
