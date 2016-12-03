/**
 * Created by davidngv on 12/3/16.
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import inflection from 'inflection';

import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';


import Notification from './Notification';

const MyMenu = () => (
  <Paper style={{ flex: '0 0 15em', order: -1 }}>
    <List>
      <ListItem containerElement={<Link to={`/admin/posts`} />} primaryText="Posts" />
    </List>
  </Paper>
);

const MyLayout = ({ isLoading, children, route, title }) => {
  const Title = <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>{title}</Link>;
  const RightElement = isLoading ? <CircularProgress color="#fff" size={0.5} /> : <span />;

  return (
    <MuiThemeProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar title={Title} iconElementRight={RightElement} />
        <div className="body" style={{ display: 'flex', flex: '1', backgroundColor: '#edecec' }}>
          <div style={{ flex: 1 }}>{children}</div>
          <MyMenu />
        </div>
        <Notification />
      </div>
    </MuiThemeProvider>
  );
};

export default MyLayout;
