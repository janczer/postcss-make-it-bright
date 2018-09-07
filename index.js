let postcss = require('postcss');
let helpers = require('postcss-message-helpers');
let color = require('color');

module.exports = postcss.plugin('postcss-make-it-bright', function (opts) {
    opts = opts || {};

    // Work with options here

    return function (style) {
        style.walkDecls((decl) => {
            if (!decl.value || decl.value.indexOf('#') === -1) {
                return;
            }

            decl.value = helpers.try(() => {
                console.log(decl.value);
                console.log(decl.source);
                return color(decl.value).lighten(0.5).hex();
            }, decl.source);
        });
    };
});
