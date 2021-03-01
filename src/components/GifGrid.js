import React, {Fragment} from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    //const [images, setImages] = useState([]);  
    
    const {data:images, loading} = useFetchGifs(category);

   
    //El useEffect permite ejecutar cierto codigo de manera condicional. Si uso solo useState,
    //todo el código se vuelve a ejecutar cada vez que hago click en el botón, es decir se vuelve a ejecutar la petición http
    // ya que se da cuenta que el componente cambio, por lo tanto vuelve a llamar a getGifs y eso no es correcto.
    //Es como el componentDidMount. [] es la lista de dependencias. Como le mando category, si esta cambia va a volver a ejecutar useEffect.
    //Se ejecuta la instrucción cuando el componente es renderizado por primera vez.
    
    /*useEffect(() => {
        getGifs(category)
            .then(setImages);
    }, [category])*/

    

    return (
        <Fragment>
            <h3>{category}</h3>
            {/* && es forma corta, si es true hace eso, sino no hace nada */}
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className="card-grid">
                
                {   images.map(img => (
                    
                        <GifGridItem 
                            key={img.id}
                            {...img}
                            
                        />
                    ))
                }
                
            </div>
        </Fragment>
     
    )
}
