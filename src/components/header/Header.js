import React,{useState} from 'react';
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import './header.css'
const Header = () => {
    const [state,setState] = useState();
    const Handler = async event => {
       const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${event.target.value}`);

        setState(response.data)

    };
    return (
        <div>
            search TV show<input type="text" onChange={Handler}/>

            {state !== undefined ? state.map(key => {
                return(
                    <div className="cards">
                        <NavLink to={`/shows/${key.show.id}`} key={key.show.id}>{key.show.name}</NavLink>
                    </div>


                )
            }) : <div>Loading</div>}
        </div>
    );

};

export default Header;