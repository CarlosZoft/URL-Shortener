import {Home, URLShow} from './page';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/show" exact={true} component={URLShow}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
