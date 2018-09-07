let postcss = require('postcss');
let helpers = require('postcss-message-helpers');
let color = require('color');

module.exports = postcss.plugin('postcss-make-it-bright', function () {
    return function (style) {
        style.walkDecls(function (decl) {
            if (!decl.value) {
                return;
            }
            let inputColor = color(decl.value);

            switch (inputColor.model) {
            case 'rgb':
                decl.value = helpers.try(() => {
                    const output = inputColor.lighten(0.5);
                    return decl.value.includes('rgb') ?
                        output.rgb() :
                        output.hex();
                }, decl.source);
                break;
            case 'hsl':
                decl.value = helpers.try(() => {
                    return inputColor.lighten(0.5);
                }, decl.source);
                break;
            default:
                return;
            }
        });
    };
});
