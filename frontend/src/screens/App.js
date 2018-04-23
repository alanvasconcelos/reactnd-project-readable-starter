import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Grid } from 'semantic-ui-react';

import Navbar from './../components/Navbar';
import CategoryMenu from './../components/CategoryMenu';

import { loadCategoriesRequest } from './../actions/categoryActions';

class App extends Component {

  componentDidMount() {
    this.props.loadCategory();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container style={{ padding: '5em 0em' }}>
          <Grid stackable columns={3}>
            <Grid.Row>
              <Grid.Column>
                <CategoryMenu data={this.props.category.data} />
              </Grid.Column>
              <Grid.Column>
                <Switch>
                  <Route exact path="/" />
                  <Redirect to="/" />
                </Switch>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ category }) => {
  return {
    category: category
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCategory: () => dispatch(loadCategoriesRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
