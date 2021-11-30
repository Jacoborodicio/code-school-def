import React, {lazy, Suspense} from 'react';
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

const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'))
const App = ({history}) => {
    const {width, height} = useWindowDimensions();
    console.log('File: App.js, Function: App, Line 16 --> history: ', history);
    return (
        <CacheProvider value={myCache}>
            <Suspense fallback={''}>
                <Dashboard history={history} width={width} height={height}/>
            </Suspense>
        </CacheProvider>
    )};
export default App;
