/**
 * Created by davidngv on 12/1/16.
 */

import React, {Component, PropTypes} from 'react';


import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import withWidth, {LARGE} from 'material-ui/utils/withWidth';
import spacing from 'material-ui/styles/spacing';
import typography from 'material-ui/styles/typography';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {cyan500, grey200, darkWhite} from 'material-ui/styles/colors';


class Login extends Component {

  render() {
    const styles = {
      root: {
        backgroundColor: grey200,
        padding: 10,
        margin: "auto",
        width: "30%"
      },
      button: {
        margin: 8
      },
      title:{
        marginLeft: 154
      },
      form:{
        textAlign: "center"
      },
      field:{
        fontSize: 24
      }
    };

    return (
      <div style={styles.root}>
        <h1 style={styles.title}>Login</h1>
        <form style={styles.form}>
          <div>
            <TextField
              floatingLabelText="User ID"
              hintText="User ID"
              style={styles.field}
            /><br />
            <TextField
              hintText="Password"
              floatingLabelText="Password"
              type="password"
              style={styles.field}
            />
          </div>
          <RaisedButton
            label="Login"
            href="#/admin"
            primary={true}
            style={styles.button}
          />
          <RaisedButton
            label="Cancel"
            href="#/"
            style={styles.button}
          />
        </form>
        
      </div>
    );
  }
}

export default Login;