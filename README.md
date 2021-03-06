# React Instagram Authless Feed

![ci](https://github.com/jamesmoriarty/react-instagram-authless-feed/workflows/ci/badge.svg) ![GitHub package.json version](https://img.shields.io/github/package-json/v/jamesmoriarty/react-instagram-authless-feed)

Simple react component to render an Instagram [feed from username](http://www.jamesmoriarty.xyz/react-instagram-authless-feed/).

![Screenshot](docs/screenshot.png)

## Install

```
npm install jamesmoriarty/react-instagram-authless-feed
```

## Props

| Name             | Description                  | Required |
| ---------------- | ---------------------------- | -------- |
| username         | Instagram username.          | true     |
| classname        | Container css class.         | false    |
| classnameLoading | Container loading css class. | false    |

## Usage

```javascript
import Feed from "react-instagram-authless-feed"
...
ReactDOM.render(
  <Feed username="jamespaulmoriarty" classname="Feed" classnameLoading="Loading"/>,
  document.getElementById('root')
);
```

## Development

```
npm start
```

## Test

```
npm test
```

## Release

```
npm run dist
```

## Build App

```
npm run build
```

## Deploy App

```
npm run deploy
```
