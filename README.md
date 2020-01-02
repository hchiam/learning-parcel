# Learning Parcel.js

Just one of the things I'm learning: <https://github.com/hchiam/learning>

Parcel is a web app bundler. It's like Webpack, but with [much less friction to set up your build](https://www.youtube.com/watch?v=b-6BeS-22yw).

You can see an example [here](https://github.com/hchiam/simple-site-with-parcel) based directly off of a [quick tutorial by Maks Akymenko](https://css-tricks.com/why-parcel-has-become-my-go-to-bundler-for-development/).

## Example Setup

```bash
npm install -g parcel-bundler
```

More: <https://parceljs.org>

## Example Usage

```bash
parcel index.html
```

And then open <http://localhost:1234> in a browser.

The command above will auto-rerun whenever you save a file.

## Tree Shaking and Minification

In other words, to automatically [trim off unused code](https://en.wikipedia.org/wiki/Tree_shaking), and to [shorten the code that *is* used](https://en.wikipedia.org/wiki/Minification_(programming)), you run a different command:

```bash
parcel build index.html --experimental-scope-hoisting
```

This does not auto-rerun whenever you save a file, but you'll notice the smaller .js file sizes in the `dist` folder.

## Inline JS into HTML

Try using [parcel-plugin-inline-source](https://www.npmjs.com/package/parcel-plugin-inline-source) after you `npm install parcel --save-dev`

```bash
npm install parcel-plugin-inline-source --save-dev
```

```html
<script src="./some-script.js" inline="inline"></script>
```

```bash
# assuming both some-template.html and some-script.js are both inside the templates folder
parcel build templates/*.html --no-source-maps --no-cache; rm dist/*.js; rm dist/*.jpg
```
