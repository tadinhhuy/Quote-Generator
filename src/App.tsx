import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import router from './router';

interface IRoute {
  path?: string;
  component?: any;
  exact?: boolean;
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {router.map((router: IRoute, index: number) => {
          return (
            <Route
              key={index}
              exact={router.exact}
              path={router.path}
              component={router.component}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
