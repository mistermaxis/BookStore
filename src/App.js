import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './components/books.js';
import Categories from './components/categories.js';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Navbar</h1>
        <Switch>
          <Route exact path="/">
            <Books></Books>
          </Route>
          <Route exact path="/categories">
            <Categories></Categories>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
