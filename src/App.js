import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from "./app.module.css";
/*Teste*/
import Menu from "./components/menu/menu";
import Home from './pages/home/home.js';
import Promos from './pages/promos/promos.js';

function App() {
  return (
    <div className={styles.Apps}>
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/promo" exact component={Promos} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;