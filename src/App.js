import React, { Component } from 'react';
import Amplify from '@aws-amplify/core';
import AuthAmplify from '@aws-amplify/auth/node_modules/@aws-amplify/core';
import AnalyticsAmplify from '@aws-amplify/analytics/node_modules/@aws-amplify/core';
import './App.css';

function registeredComponents(amplify) {
  return amplify._components.map(comp => {
    if (typeof comp.getModuleName === 'function') {
      return comp.getModuleName()
    } else {
      return comp
    }
  })
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
            {`Amplify registered components: ${registeredComponents(Amplify)}`}
            </li>
            <li>
              {`Auth Amplify registered components: ${registeredComponents(AuthAmplify)}`}
            </li>
            <li>
              {`Analytics Amplify registered components: ${registeredComponents(AnalyticsAmplify)}`}
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
