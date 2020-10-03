import React, { Component } from 'react';
import styles from './styles.js';
import {withStyles} from '@material-ui/styles';
import {ThemeProvider} from '@material-ui/styles';
import TaskBoard from '../TaskBoard';
import theme from './../../commons/Theme';
import DichVu from './../DichVu';
import {BrowserRouter ,Switch,Route} from 'react-router-dom';
import {ADMIN_ROUTES} from '../constants';
import AdminLayoutRoute from '../../commons/Layout/AdminLayoutRoute';
class App extends Component {
  renderAdminRoutes() {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route) => {
      return (
        <AdminLayoutRoute 
          key= {route.path}
         path = {route.path}
         component = {route.component}
         exact = {route.exact}
         name = {route.name}
        />
      );
    })
    return xhtml;
  }
  render() {
    const {classes} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            {this.renderAdminRoutes()}
          </Switch>
        </BrowserRouter>
        
      </ThemeProvider>
    );
  }
}
export default withStyles(styles)(App);
