## Image

- import a file in a js module.

```js
import logo from "./logo.png"; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}
```

```
This ensures that when the project is built, Webpack will correctly move the images into the build folder, and provide us with correct paths.

To reduce the number of requests to the server, importing images(SVG files are excluded) that are less than 10,000 bytes returns a data URI instead of a path.

```

- in css

```css
.Logo {
  background-image: url(./logo.png);
}
```

```
Webpack finds all relative module references in CSS (they start with ./) and replaces them with the final paths from the compiled bundle.
```

## svg

```js
import { ReactComponent as Logo } from "./logo.svg";
const App = () => (
  <div>
    {/* Logo is an actual React component */}
    <Logo />
  </div>
);
```
