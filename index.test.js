let postcss = require('postcss');
let plugin = require('./');

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

it('test hex 3 digit color', () => {
    // @TODO change it. If input is 3 digit color then output should be 3 dig
    return run('a{ color: #aaa }', 'a{ color: #FFFFFF }', { });
});

it('test hex rgb', () => {
    return run(
        'a{ color: rgb(10, 10, 10); }',
        'a{ color: rgb(15, 15, 15); }',
        { }
    );
});

it('test hex rgba', () => {
    return run(
        'a{ color: rgba(10, 10, 10, 0.6); }',
        'a{ color: rgba(15, 15, 15, 0.6); }',
        { }
    );
});


it('test rgba with alpha channel 1, should return rgb-model', () => {
    return run(
        'a { color: rgba(10, 10, 10, 1) }',
        'a { color: rgb(15, 15, 15) }',
        {}
    );
});

it('test hsl color', () => {
    return run(
        'a{ color: hsl(150, 43%, 50%) }',
        'a{ color: hsl(150, 43%, 75%) }',
        {}
    );
});

it('test hsla', () => {
    return run(
        'a { color: hsla(90, 10%, 10%, 0.6) }',
        'a { color: hsla(90, 10%, 15%, 0.6) }',
        {}
    );
});

it('test hsla with alpha channel 1, should return hsl-model', () => {
    return run(
        'a { color: hsla(90, 10%, 10%, 1) }',
        'a { color: hsl(90, 10%, 15%) }',
        {}
    );
});

it('test color word', () => {
    return run('a { color: red }', 'a { color: #FF8080 }', {});
});
