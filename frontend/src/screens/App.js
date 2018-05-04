import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Container, Grid } from "semantic-ui-react";

import { findAllCategoryRequest } from "./../actions/category";

import Navbar from "./../components/Navbar";
import CategoryMenu from "./../components/CategoryMenu";
import PostsScreen from "./PostsScreen";
import NotFound from "./NotFound";
import PostScreen from "./PostScreen";

class App extends Component {

  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container style={{ padding: "5em 0em" }}>
          <Grid stackable columns={2}>
            <Grid.Row>
              <Grid.Column width={12}>
                <Switch>
                  <Route exact path="/" component={PostsScreen} />
                  <Route exact path="/:category(react|redux|udacity)" component={PostsScreen} />
                  <Route exact path="/:category(react|redux|udacity)/:post_id" component={PostScreen} />
                  <Route component={NotFound} />
                </Switch>
              </Grid.Column>
              <Grid.Column width={4}>
                <CategoryMenu {...this.props.category} />
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
  loadCategories: () => dispatch(findAllCategoryRequest())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
