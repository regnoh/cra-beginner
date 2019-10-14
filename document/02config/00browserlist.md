## browserlist：

> Configuring Supported Browsers
> By default, includes a browserslist configuration in package.json

    1. target a broad range of browsers based on global usage (> 0.2%) for production builds
    2. modern browsers for development.

```js
"browserslist": {
    "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
    ],
    "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
    ]
}

```

```
When editing the browserslist config, you may notice that your changes don't get picked up right away. This is due to an issue in babel-loader not detecting the change in your package.json. An easy solution is to delete the node_modules/.cache folder and try again.
```
