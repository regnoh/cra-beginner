## encourage you to import assets in js file

1. Scripts and stylesheets get minified and bundled together to avoid extra network requests.
2. Missing files cause compilation errors instead of 404 errors for your users.
3. Result filenames include content hashes so you don’t need to worry about browsers caching their old versions.

## Adding Assets Outside of the Module System

1. add assets to the `public` folder, it will not be processed by Webpack. Instead it will be `copied` into the build folder untouched.
2. To reference assets in the public folder, you need to use a special variable called `PUBLIC_URL`.
3. Only files inside the public folder will be accessible by %PUBLIC_URL% prefix.

```html
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
```
