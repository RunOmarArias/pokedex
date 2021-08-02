import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PokeData from '../views/PokeData/index';
import Error from '../views/Error/index';
import Home from '../views/Home/index';

export default function Routes() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/pokemon/:id" >
                    <PokeData />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
}