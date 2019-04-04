import React from 'react';
import './styles/styles.scss';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';
import * as serviceWorker from './components/ServiceWorker/serviceWorker';
import {
    Route,
    Switch,
    HashRouter
} from 'react-router-dom';

import App from './components/App/App.jsx';
import HomePage from './pages/homepage/homepage';
import Packagespage from './pages/packagespage/packagespage';
import Contactpage from './pages/contactpage/contactpage';
import ContactSuccessPage from './pages/contactpage/contact-successpage';


const routes = (
    <HashRouter>
        <Switch>
            <App>
				<Route path="/" exact component={HomePage} />
				<Route path="/packages" exact component={Packagespage} />
				<Route path="/contact" exact component={Contactpage} />
				<Route path="/contact-success" exact component={ContactSuccessPage} />
            </App>
        </Switch> 
    </HashRouter>
);

const outlet = document.getElementById('root');

const render = () => {
    ReactDOM.render(
        <AppContainer>
            {routes}
        </AppContainer>,
        outlet
    );
};

render();

if (module.hot) {
    module.hot.accept(render);
}

serviceWorker.unregister();