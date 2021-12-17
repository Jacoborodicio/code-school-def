/** @jsx jsx **/
import React, {lazy, Suspense} from 'react';
import {jsx} from "@emotion/react";
import {Container} from "./dashboard-styles";
import {Route, Router, Switch} from "react-router-dom";

const TopicsPanel = lazy(() => import('./TopicsPanel'));
const CssGrid = lazy(() => import('../CssGrid/CssGrid'));
const SpringAnimations = lazy(() => import('../SpringAnimations/SpringAnimations'));
const DevPlace = lazy(() => import('../DevPlace/DevPlace'));

const Dashboard = ({width, height, history}) => {
    const containerProps = {
        dimensions: {height, width},
    }
    return (
        <Container {...containerProps}>
            <Router history={history}>
                <Switch>
                <Route exact path={'/'}>
                    <Suspense fallback={''}>
                        <TopicsPanel />
                    </Suspense>
                </Route>
                <Route exact path={'/css-grid'}>
                    <Suspense fallback={''}>
                        <CssGrid/>
                    </Suspense>
                </Route>
                <Route exact path={'/spring-animations'}>
                    <Suspense fallback={''}>
                        <SpringAnimations/>
                    </Suspense>
                </Route>
                <Route exact path={'/dev-place'}>
                    <Suspense fallback={''}>
                        <DevPlace/>
                    </Suspense>
                </Route>
                </Switch>
            </Router>
        </Container>
    )
}

export default Dashboard;
