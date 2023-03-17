import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Detail = () => {

    //Acá es donde guardamos detailID. useParams es un objeto que tiene como propiedad "detailID". Esto se lo decimos en app.js. 
    //La idea de esto es guardar todos los detalles de cada character en su propia id y no la de otro character. Por eso tenemos que guardar esta info.
    const {detailID} = useParams();
    
    const [character, setCharacter] = useState({});
    
    //Siempre useEffect tiene una callback y un array
    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "dac1f7ac8c54.6d7aadaf056f93592c47";
        axios(`${URL_BASE}/character/${detailID}?key=${KEY}`)

        //OJO CON ESTO DE AXIOS! response.data
        .then(response=>setCharacter(response.data));
        
    }, []);

    return(
        <div>

            {/* Acá le vamos a decir lo siguiente. characte.name existe? si existe, mostrame esto (y ahí la info) Si no existe, mostrame loading */}
            {
                character.name ?
                (<>
                    <h2>{character.name}</h2>
                    <p>{character.status}</p>
                    <p>{character.species}</p>
                    <p>{character.gender}</p>
                    {/* Acá le decimos que espere hasta que la info de origin esté disponible, porque a veces axios tarda mucho */}
                    <p>{character.origin?.name}</p>
                    <img src={character.image} alt="img" />
                </>)
                : <h3>Loading...</h3>
            }
        
            
        </div>
    )
};

export default Detail;