import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Container, Grid } from "semantic-ui-react";

import { findAllCategoryRequest } from "./../actions/category";

import Navbar from "./../components/Navbar";
import CategoryMenu from "./../components/CategoryMenu";
import HomeScreen from "./HomeScreen";
import CategoryScreen from "./CategoryScreen";
import Page404 from "./Page404";
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
                  <Route exact path="/" component={HomeScreen} />
                  <Route exact path="/:category(react|redux|udacity)" component={CategoryScreen} />
                  <Route exact path="/:category(react|redux|udacity)/:post_id" component={PostScreen} />
                  <Route component={Page404} />
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
