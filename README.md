# react-themer-jss
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.org/caapim/react-themer-jss.svg?branch=master)](https://travis-ci.org/caapim/react-themer-jss)
[![codecov](https://codecov.io/gh/caapim/react-themer-jss/branch/master/graph/badge.svg)](https://codecov.io/gh/caapim/react-themer-jss)
[![dependencies](https://david-dm.org/caapim/react-themer-jss.svg)](https://david-dm.org/caapim/react-themer-jss)
[![devDependency Status](https://david-dm.org/caapim/react-themer-jss/dev-status.svg)](https://david-dm.org/caapim/react-themer-jss#info=devDependencies)
************************************************************

Themer middleware for React JSS integration.

## Installation
```js
npm install react-themer-jss --save
```

************************************************************

## Usage
`/themer.js`
```js
import { create as createThemer } from 'themer';
import { create as createReactThemer } from 'react-themer';
import { create as createReactThemerJssMiddleware } from 'react-themer-jss';
import { create as createJss } from 'jss';
import { create as createInjectSheet } from 'react-jss';

// setup JSS
const jss = createJss();
const injectSheet = createInjectSheet(jss);

// setup Themer
const themer = createThemer();

// set react-themer-jss middleware
themer.setMiddleware(createReactThemerJssMiddleware(injectSheet));

// export react-themer instance
export default createReactThemer(themer);
```

`/HelloWorld.js`
```js
import React from 'react';

// import themer from local file
import themer from './themer';

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

export default themer(helloWorldTheme)(HelloWorld);

```

************************************************************

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
************************************************************

## How Can You Contribute
Your contributions are welcome and much appreciated. To learn more, see the [Contribution Guidelines](https://github.com/CAAPIM/react-themer-jss/blob/master/CONTRIBUTING.md).

This project supports `commitizen`. You can use `npm run commit` to run the local instance of `commitizen` or `git cz` if you have it installed globally.

Alternatively, if you are simply using `git commit`, you must follow this format:
`git commit -m "<type>: <subject>"`
************************************************************

## License
Copyright (c) 2016 CA. All rights reserved.
This software may be modified and distributed under the terms of the MIT license. To learn more, see the [License](https://github.com/CAAPIM/react-themer-jss/blob/master/LICENSE).
