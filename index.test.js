var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([plugin(opts)])
        .process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('Check basic transformation', () => {
    return run('a:lang(en, de){}', 'a:lang(en), a:lang(de){}');
});
