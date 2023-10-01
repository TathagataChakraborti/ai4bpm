import React, { Component } from 'react';
import './app.scss';

import { Content } from '@carbon/react';
import { Route, Switch } from 'react-router-dom';

import PageHeader from './components/PageHeader';
import LandingPage from './content/LandingPage';
import ToolsPage from './content/ToolsPage';
import ProgramPage from './content/ProgramPage';
import PostersPage from './content/PostersPage';

class App extends Component {
  render() {
    return (
      <>
        <PageHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/tools" component={ToolsPage} />
            <Route exact path="/program" component={ProgramPage} />
            <Route exact path="/posters" component={PostersPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
