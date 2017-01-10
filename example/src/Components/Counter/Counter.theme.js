/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

export default {
  variables: {
    bgColor: 'red',
  },
  styles: (_, vars) => ({
    root: {
      backgroundColor: vars && vars.bgColor ? vars.bgColor : 'blue',
      fontSize: '24px',
      color: 'white',
    }
  }),
};
