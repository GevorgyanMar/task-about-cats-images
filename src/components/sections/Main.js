import React from 'react';
import { Switch, Route } from 'react-router';
import './Main.css';
import Cats from '../pages/Cats';
import Boxes from '../pages/Boxes';
import Clothes from '../pages/Clothes';
import Hats from '../pages/Hats';
import Sinks from '../pages/Hats';
import Space from '../pages/Hats';
import Sunglasses from '../pages/Hats';
import Ties from '../pages/Ties';


const Main = () => {
    return (
        <main className="task-main">
            <Switch>
                <Route exact path="/">
                    <Cats />
                </Route>
                <Route path="/boxes">
                    <Boxes />
                </Route>
                <Route path="/clothes">
                    <Clothes />
                </Route>
                <Route path="/hats">
                    <Hats />
                </Route>
                <Route path="/sinks">
                    <Sinks />
                </Route>
                <Route path="/space">
                    <Space />
                </Route>
                <Route path="/sunglasses">
                    <Sunglasses />
                </Route>
                <Route path="/ties">
                    <Ties />
                </Route>
            </Switch>
        </main>
    );
};

export default Main;

