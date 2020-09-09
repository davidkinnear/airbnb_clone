import React, {useState} from 'react'
import './Banner.css'
import {Button} from "@material-ui/core";
import Search from './Search'
import { useHistory } from "react-router-dom";


function Banner() {
    const history=useHistory();
//showSearch keeps track of whether the button is clicked or not    
    const [showSearch,setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner__search"> 
 {/* if showSearch is true render the Search element*/}                          
                {showSearch && <Search/>} 
{/*when click button the opposite of showSearch executes*/}
    <Button onClick={() => setShowSearch(!showSearch)} className="banner__searchButton" variant="outlined">{showSearch ? "Hide":"Search Dates"}</Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button onClick={() => history.push('/search')} variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
