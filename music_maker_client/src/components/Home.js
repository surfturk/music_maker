import React from 'react'
import ReactPlayer from "react-player";




const Home = () => {
    return (
       
        <div class="container">
            <ReactPlayer
            url='https://www.youtube.com/watch?v=cJunCsrhJjg'
            playing={true}
             />
         </div>
       
    )
}

export default Home
