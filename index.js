let postcss = require('postcss');
let helpers = require('postcss-message-helpers');
let color = require('color');

function _handelParseColor(value) {
    try {
        return color(value);
    } catch (e) {
        return null;
    }
}

module.exports = postcss.plugin('postcss-make-it-bright', function (opts) {
    opts = opts || {};
    return function (style) {
        style.walkDecls(function (decl) {
            if (!decl.value) {
                return;
            }

            let inputColor = _handelParseColor(decl.value);
            if (!inputColor) {
                return;
            }

            let value = Number.isInteger(opts.value) ?
                Number(opts.value) / 100 :
                0.5;
            if (value > 1) {
                value = 1;
            }
            if (value < 0) {
                value = 0;
            }

            switch (inputColor.model) {
            case 'rgb':
                decl.value = helpers.try(() => {
                    const output = inputColor.lighten(value);
                    return decl.value.includes('rgb') ?
                        output.rgb() :
                        output.hex();
                }, decl.source);
                break;
            case 'hsl':
                decl.value = helpers.try(() => {
                    return inputColor.lighten(value);
                }, decl.source);
                break;
            default:
                return;
            }
        });
    };
});
