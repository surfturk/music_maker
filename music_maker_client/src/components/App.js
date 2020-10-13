import React from 'react';

import Router from './Router'
import PlaylistsContainer from './PlaylistsContainer'
import PlaylistsList from './PlaylistsList';

const App = () => {
    return (
        <div>
            <PlaylistsContainer />
            <Router />
        </div>
    )
}

export default App;