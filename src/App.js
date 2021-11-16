import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './pages/books.js';
import Categories from './pages/categories.js';
import Navbar from './components/navbar.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
