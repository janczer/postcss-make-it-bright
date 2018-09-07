var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('test hex color', () => {
    return run('a{ color: #121212 }', 'a{ color: #1B1B1B }', { });
});

it ('test hsl color', () => {
    return run('a{ color: hsl(150, 43, 50%) }', 'a{ color: hsl(150, 43, 75%) }', { });
});
