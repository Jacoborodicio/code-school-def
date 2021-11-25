import React from 'react';
import Dashboard  from "./components/Dashboard/Dashboard";
import useWindowDimensions from "./hooks/useWindowDimensions";
import {Route, BrowserRouter} from "react-router-dom";

const App = () => {
    const {width, height} = useWindowDimensions();
    return (
        <Dashboard width={width} height={height}/>
    )};
export default App;
