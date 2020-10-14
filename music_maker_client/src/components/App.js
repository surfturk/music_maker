import React from 'react';

import SongContainer from './SongsContainer'


import Router from './Router'
import Navbar from './Navbar'



const App = () => {
    return (
        <div>   
            <Navbar />
            <Router />

            <SongContainer />
        </div>
    )
}

export default App;