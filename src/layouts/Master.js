/**
 * Created by davidngv on 12/1/16.
 */


import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Master = (props) => <div>
  <MuiThemeProvider>
    {props.children}
  </MuiThemeProvider>
</div>

export default Master;