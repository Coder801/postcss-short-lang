# PostCSS Short Lang [![Build Status][ci-img]][ci]

Small [PostCSS] plugin for more shorter lang pseudoclass.

[postcss]: https://github.com/postcss/postcss
[ci-img]: https://travis-ci.org/Coder801/postcss-lang-short.svg
[ci]: https://travis-ci.org/Coder801/postcss-lang-short

```css
.example:lang(en, de, fr) {
    /* Css properties */
}
```

```css
.example:lang(en),
.example:lang(de),
.example:lang(fr) {
    /* Css properties */
}
```

## Usage

```js
postcss([require('postcss-short-lang')]);
```

See [PostCSS] docs for examples for your environment.
