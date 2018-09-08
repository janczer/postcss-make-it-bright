# PostCSS Make It Bright [![Build Status][ci-img]][ci]

[PostCSS] plugin make all colors more bright.

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

## How it works

This plugin make all colors more bright, exactly 50% lighter.

## Models of color

* [RGB](#rgb)
* [RGBA](#rgba)
* [HSL](#hsl)
* [HSLA](#hsla)
* [Word](#word)

#### RGB

```css
.foo {
  color: rgb(10, 10, 10);
}
```

```css
.foo {
  color: rgb(15, 15, 15);
}
```

#### RGBA

```css
.foo {
  color: rgba(10, 10, 10, 0.6);
}
```

```css
.foo {
  color: rgba(15, 15, 15, 0.6);
}
```

If alpha channel is `1` the plugin return a color in `rgb` model.

#### HSL

```css
.foo {
  color: hsl(90, 10%, 10%);
}
```

```css
.foo {
  color: hsl(90, 10%, 10%);
}
```

#### HSLA

```css
.foo {
  color: hsla(90, 10%, 10%, 0.6);
}
```

```css
.foo {
  color: hsla(90, 10%, 15%, 0.6);
}
```

If the alpha channel is `1` then a plugin return a color in `rgb` model.

#### Word


```css
.foo {
  color: red;
}
```

```css
.foo {
  color: #FF8080;
}
```

See [PostCSS] docs for examples for your environment.

## LICENSE

See [LICENSE](LICENSE)

