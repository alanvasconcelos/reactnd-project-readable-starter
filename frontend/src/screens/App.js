import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Grid } from 'semantic-ui-react';

import { loadCategoriesRequest } from './../actions/category';

import Navbar from './../components/Navbar';
import Category from './../components/Category';

import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';

class App extends Component {

  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container style={{ padding: '5em 0em' }}>
          <Grid stackable columns={2}>
            <Grid.Row>
              <Grid.Column width={4}>
                <Category {...this.props.category} />
              </Grid.Column>
              <Grid.Column width={12}>
                <Switch>
                  <Route exact path='/' component={HomeScreen} />
                  <Route path='/:category' component={CategoryScreen} />
                  <Redirect to='/' component={HomeScreen} />
                </Switch>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ category }) => ({ category });

const mapDispatchToProps = (dispatch) => ({
  loadCategories: () => dispatch(loadCategoriesRequest())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
