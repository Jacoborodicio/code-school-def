import React from 'react';
import Dashboard  from "./components/Dashboard/Dashboard";
import useWindowDimensions from "./hooks/useWindowDimensions";
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import {prefixer} from "stylis";
const myCache = createCache({
    key: 'code-school',
    stylesPlugins: [
        prefixer
    ],
})
const App = () => {
    const {width, height} = useWindowDimensions();
    return (
        <CacheProvider value={myCache}>
            <Dashboard width={width} height={height}/>
        </CacheProvider>
    )};
export default App;
