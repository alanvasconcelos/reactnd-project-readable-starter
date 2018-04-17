import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Grid, Header, Segment, Dimmer, Loader, Menu } from 'semantic-ui-react';

import Navbar from './../components/Navbar';

import { loadCategoryRequest } from './../actions/category';

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
                <Segment.Group>
                  <Header as='h4' attached='top'>Categories</Header>
                  <Dimmer.Dimmable as={Segment.Group} dimmed={this.props.isFetching}>
                    <Dimmer active={this.props.isFetching} inverted>
                      <Loader inverted />
                    </Dimmer>
                    {
                      !this.props.isFetching
                      && this.props.categories
                      && this.props.categories.map((category) => (
                        <Segment key={category.path}>{category.name}</Segment>
                      ))
                    }
                  </Dimmer.Dimmable>
                </Segment.Group>
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
    isFetching: category.isFetching,
    categories: category.data,
    error: category.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCategory: () => dispatch(loadCategoryRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
