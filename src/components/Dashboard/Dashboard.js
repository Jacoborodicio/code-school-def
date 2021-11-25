/** @jsx jsx **/
import React, {useEffect, useRef, useState, lazy, Suspense} from 'react';
import {jsx} from "@emotion/react";
import {Container} from "./dashboard-styles";
import {mainTopics} from "../../helpers/constants";
import {Route, BrowserRouter} from "react-router-dom";

const TopicsPanel = lazy(() => import('./TopicsPanel'));
const CssGrid = lazy(() => import('../CssGrid/CssGrid'));

const Dashboard = ({width, height}) => {
    const containerProps = {
        dimensions: {height, width},
    }
    return (
        <Container {...containerProps}>
            <BrowserRouter>
                <Route path={'/css-grid'}>
                    <Suspense fallback={''}>
                        <CssGrid/>
                    </Suspense>
                </Route>
                <Route path={'/'} exact>
                    <Suspense fallback={''}>
                        <TopicsPanel />
                    </Suspense>
                </Route>
            </BrowserRouter>
        </Container>
    )
}

export default Dashboard;
