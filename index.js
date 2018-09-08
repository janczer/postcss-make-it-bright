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

            let lighter = Number.isInteger(opts.lighter) ?
                Number(opts.lighter) / 100 :
                0.5;
            if (lighter > 1) {
                lighter = 1;
            }
            if (lighter < 0) {
                lighter = 0;
            }

            switch (inputColor.model) {
            case 'rgb':
                decl.value = helpers.try(() => {
                    const output = inputColor.lighten(lighter);
                    return decl.value.includes('rgb') ?
                        output.rgb() :
                        output.hex();
                }, decl.source);
                break;
            case 'hsl':
                decl.value = helpers.try(() => {
                    return inputColor.lighten(lighter);
                }, decl.source);
                break;
            default:
                return;
            }
        });
    };
});
