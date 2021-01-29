import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import QuoteGenerator from './pages/QuoteGenerator';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/quotes" component={QuoteGenerator} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
