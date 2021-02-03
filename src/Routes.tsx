import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Home from './Home';
import Search from './Search';

const Routes = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/search" >
                    <Search />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;