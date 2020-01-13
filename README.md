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

1) Make sure to use `inline="inline"` when you link the .js file to the .html file:

    ```html
    <script src="./index.js" inline="inline"></script>
    ```

2) Install [parcel-plugin-inline-source](https://www.npmjs.com/package/parcel-plugin-inline-source) as a development dependency:

    ```bash
    npm install parcel-plugin-inline-source --save-dev
    ```

3) Then this command will use parcel-plugin-inline-source:

    ```bash
    parcel build index.html --no-source-maps --no-cache
    ```

4) You might want to do this too: `rm dist/*.js; rm dist/*.jpg`

## Babel core-js 3 ponyfill

(To transform modern syntax into code accessible to older browsers without breaking native built-ins.)

<https://github.com/kubenstein/parcel-babel-runtime-example>
