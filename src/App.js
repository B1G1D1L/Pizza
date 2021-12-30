import './index.scss';
import { Header } from './components/Header';
import Home from './pages/Home';
import { Route, Switch } from 'react-router';
import Card from './pages/Card';

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/cart" render={() => <Card />} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
