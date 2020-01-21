import React,{useState,useEffect} from 'react';
import axios from 'axios'

const Main = props => {
    const [state,setState] = useState();

    const fetchData = async () => {
        const id = props.match.params.id;
        const response = await axios.get(`http://api.tvmaze.com/shows/${id}`);
        setState(response);
    };
    useEffect(() => {
        fetchData()
    },[props.match.params.id]);
    return (
        <div>

            {state !== undefined || null ?
                <div>
                    <div>  name:{state.data.name}</div>
                    description:{state.data.summary !== "" && null ? <p>{state.data.summary.replace(/<[^>]+>/g,'')}</p>:<p>no description</p>}

                    {state.data.image !== null ? <img src={state.data.image.medium}/>:<p>no img</p>}

                </div>
                : <div>Loading</div>}
        </div>
    );
};

export default Main;