import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

//Hooks son funciones. Pueden tener su estado, puede indicar a otros componentes cuando
//deben de renderizarse porque algo cambió.

export const useFetchGifs = (category) => {

    //Cuando se llame a esta función por primera vez va a tener este estado por defecto
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    //Aca ahgo la petición http y traigo las imagenes.
    //Evalúa este efecto sólo cuando la categoría cambia
    //Loading en false porque ya terminó de cargar
    
    //Se hace el efecto para que se dispare solo cuando cambia la categoria
    useEffect(() => {
        //Hace la petición http
        getGifs(category)
            //Tenemos las imágenes
            .then(imgs => {
                //Ponemos el timeoiut intencional para hacerlo mas lento
               //setTimeout(() => {
                   //Cuando tenemos la data se llama al setState. Éste cambia la información. Va a disparar una renderización en el componente GifGrid.
                    setstate({
                        data: imgs,
                        loading:false
                });
               //}, 1500);
            })
    }, [category]);

    

    return state; // { data: [], loading: true}
}