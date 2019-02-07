import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Intro from "./components/main/Intro";
import Main from "./components/main/Main";
import NewLearning from "./components/timeline/NewLearning";
import EditLearning from "./components/timeline/EditLearning";
import LearningDetails from "./components/timeline/LearningDetails";
import Error from "./components/Error";
import CssBaseline from "@material-ui/core/CssBaseline";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Intro} exact />
              <Route path="/timeline" component={Main} />
              <Route path="/learning/:id" component={LearningDetails} />
              <Route path="/new-learning" component={NewLearning} />
              <Route path="/edit-learning" component={EditLearning} />
              <Route component={Error} />
            </Switch>
            {/* TODO: Footer Component */}
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
