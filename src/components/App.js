import React from 'react';

import { BrowserRouter ,Switch, Route, Link } from 'react-router-dom';

import  NotFound from '../pages/NotFound';
import Layout from '../components/Layout'
import myPOS from '../pages/myPOS.js';

 function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={home} />
                    <Route exact path="/myPOS" component={myPOS} />
                    <Route component={NotFound} />                                       
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}
export default App;

function home() {
 return(
    <ul>
    <li>
        <Link to="/">
            <button>HOME</button>
        </Link>
    </li>
    <li>
        <Link to="/myPOS">
            <button>ir al Programa</button>
        </Link>
    </li>
</ul>
 );   
}