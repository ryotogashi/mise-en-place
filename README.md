## 🔥How to make this env

### initial the project

```
npm init -y
```

### start git

```
git init
```

### install webpack

```
npm i -D webpack webpack-cli
```

### install React and type

```
npm i react react-dom
npm i -D @types/react @types/react-dom
```

### install typescript and loader

```
npm i -D typescript ts-loader source-map-loader
```

### add ts configration file

```
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es6",
    "jsx": "react"
  }
}
```

### reforence

https://techblog.commercetools.com/why-you-should-build-a-react-component-library-and-style-it-with-css-in-js-12397fd69c58

https://uikit.commercetools.com/?path=/story/introduction--getting-started
