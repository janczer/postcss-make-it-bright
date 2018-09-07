# PostCSS Make It Bright [![Build Status][ci-img]][ci]

[PostCSS] plugin make all colors more bright depends on param.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/janczer/postcss-make-it-bright.svg
[ci]:      https://travis-ci.org/janczer/postcss-make-it-bright

```css
.foo {
  color: #121212;
}
```

```css
.foo {
  color: #1B1B1B;
}
```

## Usage

```js
postcss([ require('postcss-make-it-bright') ])
```

See [PostCSS] docs for examples for your environment.
