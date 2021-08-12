import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import styles from "./app.module.css";
/*Teste*/ 
import Menu from "./components/menu/menu";
import CardMain from './components/cardmain/cardmain';
import Page1 from './pages/page1/page1.js';
import Page2 from './pages/page2/page2';

function App() {
  return (
    <div className={styles.Apps}>
      <Menu />
      <Router>
        <Switch>
          <Route path="/" exact component={Page1}/>
          <Route path="/page2" exact component={Page2}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
