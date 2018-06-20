import React from 'react'

import 'components/App.scss'
import {Route} from "react-router-dom";

const App = () =>
  <Route path="/" component={() => (
    <div>
      <h1>Hello App</h1>
    </div>
  )} />


export default App