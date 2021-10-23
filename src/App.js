import './index.scss';
import { Header } from './components/Header';
import Home from './pages/Home';
import { pizzaAPI } from './api/api';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import Card from './pages/Card';


function App() {
  const [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    pizzaAPI.getPizza()
      .then(response => setPizzaList(response.pizzas));
  }, [])

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Switch>
              <Route exact path="/" render={() => <Home pizzaList={pizzaList} />} />
              <Route exact path="/card" render={() => <Card />} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
