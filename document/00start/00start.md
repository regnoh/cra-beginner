## [create react app](https://create-react-app.dev/docs/getting-started)

**is the best way to start building a new SPA in React**

- Create an app

```bash
yarn create react-app my-app(快)
npx create-react-app my-app
```

- no Config

```
Inside the newly created project，no configuration or complicated folder structures. You don’t need to install or configure tools like Webpack or Babel. They are preconfigured and hidden so that you can focus on the code.
```

- ToolChain

```
1. package manager: npm / yarn: install third-party packages
2. bundle: webpack: let you write modular code and bundle it together into small packages to optimize lode time
3. compiler: babel: let you write modern js code that still works in older browsers
```

```
If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app to ensure that npx always uses the latest version.
```

- cnpm/tyarn 是走的国内淘宝的 npm.taobao.org 镜像

```
npx: it’s a package runner tool that comes with npm 5.2+.
npm install -g cnpm --registry=https://registry.npm.taobao.org
npm install yarn tyarn -g
cnpm i -D webpack(-D: --save-dev: devDependencies)
cnpm i -S axios(-S: --save: dependencies)
tyarn add antd
When you create a new app, the CLI will use Yarn to install dependencies (when available).
```

- Scripts

```
**npm start**
run the app in development mode (--mode development)
open 3000(--open --post 3000)
reload on change(webpack-dev-server)

**npm build**
builds the app for production to the **build** folder
the build is minified for the best performance
the filenames include the hashes(filename: [name].[hash].[ext])
```
