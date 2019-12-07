import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';





/* za MobX
import {Provider} from 'mobx-react';
import Store from './stores/Stores';
dali umjesto Router upisati Provider prema mobx-u

const Root = (
<Provider Store = {Store}>   -dobijamo pristup storeu u projektu
<App/>
</Provider>
);

*/


ReactDOM.render(
<Router>
  <App />
</Router>, document.getElementById('root')); 


serviceWorker.unregister();
