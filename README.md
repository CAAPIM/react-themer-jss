# react-themer-jss
[![Build Status](https://travis-ci.org/CAAPIM/react-themer-jss.svg?branch=master)](https://travis-ci.org/CAAPIM/react-themer-jss)
[![codecov](https://codecov.io/gh/CAAPIM/react-themer-jss/branch/master/graph/badge.svg)](https://codecov.io/gh/CAAPIM/react-themer-jss)
[![dependencies](https://david-dm.org/CAAPIM/react-themer-jss.svg)](https://david-dm.org/CAAPIM/react-themer-jss)
[![devDependency Status](https://david-dm.org/CAAPIM/react-themer-jss/dev-status.svg)](https://david-dm.org/CAAPIM/react-themer-jss#info=devDependencies)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
************************************************************

## Overview
[Themer](https://github.com/CAAPIM/themer) middleware for [React JSS](https://github.com/cssinjs/react-jss) integration. This library allows component developers to use JSS to style React components while using [themer](https://github.com/CAAPIM/themer) and [react-themer](https://github.com/CAAPIM/react-themer) to make their components themes extensible.

## Installation
```js
npm install @caapim/react-themer-jss --save
```

## Usage

### Simple usage in React component

`/HelloWorld.js`
```js
import React from 'react';
import reactThemerJSS from '@caapim/react-themer-jss';

const HelloWorld = (props) => {
  const styles = props.theme && props.theme.styles ? props.theme.styles : {};
  return <div className={styles.root}>Hello world</div>;
};

// define JSS styles in theme object
const helloWorldTheme = {
  styles: {
    root: {
      textAlign: 'center',
      fontSize: '20px',
      color: 'white',
      background: 'blue'
    }
  }
};

export default reactThemerJSS(helloWorldTheme)(HelloWorld);
```

### Advanced usage

You can also create your own instance of reactThemerJSS and specify custom options for JSS and Themer.

`/customThemer.js`
```js
import { create as createJss } from 'jss';
import { create as createInjectSheet } from 'react-jss';
import { create as createThemer } from '@caapim/themer';
import { create as createReactThemer } from '@caapim/react-themer';
import { createMiddleware as createReactThemerJssMiddleware } from '@caapim/react-themer-jss';

// setup custom JSS instance
const jss = createJss();
const injectSheet = createInjectSheet(jss);

// create new Themer instance
const themer = createThemer();

// set react-themer-jss middleware
themer.setMiddleware(createReactThemerJssMiddleware(injectSheet));

// export react-themer instance
export default createReactThemer(themer);
```

Then use the exported instance in your components:

`/HelloWorld.js`
```js
import React from 'react';

// import themer from local file
import customThemer from './customThemer';

const HelloWorld = (props) => {
  const styles = props.theme && props.theme.styles ? props.theme.styles : {};
  return <div className={styles.root}>Hello world</div>;
};

// define JSS styles in theme object
const helloWorldTheme = {
  styles: {
    root: {
      textAlign: 'center',
      fontSize: '20px',
      color: 'white',
      background: 'blue'
    }
  }
};

export default customThemer(helloWorldTheme)(HelloWorld);
```

## Development
|`npm run <script>`|Description|
|------------------|-----------|
|`lint`| Runs eslint against all `.js` files in `./src` folder.|
|`flow`| Runs flowtype validation against all `.js` files in `./src` and `./tests` folders.|
|`test`|Runs [Mocha](https://github.com/mochajs/mocha) against all `./src/*.spec.js` files.|
|`test:watch`|Runs long running `test` command.|
|`test:coverage`|Runs `test` command and generates coverage report.|
|`precommit`|Runs `lint`, `flow`, `test` commands.|
|`commit`|Uses [commitizen](https://github.com/commitizen/cz-cli) to do proper tagged commits.|
|`release`|Uses [semantic-release](https://github.com/semantic-release/semantic-release) to trigger releases.|

## How Can You Contribute
Your contributions are welcome and much appreciated. To learn more, see the [Contribution Guidelines](CONTRIBUTING.md).

This project supports `commitizen`. You can use `npm run commit` to run the local instance of `commitizen` or `git cz` if you have it installed globally.

Alternatively, if you are simply using `git commit`, you must follow this format:
`git commit -m "<type>: <subject>"`

## License
Copyright (c) 2017 CA. All rights reserved.
This software may be modified and distributed under the terms of the MIT license. To learn more, see the [License](LICENSE).
