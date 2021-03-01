import { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


//No se debe colocar key=i. key es el id único del elemento, no puede ser el indice.
const GifExpertApp = () => {
  

    //const categories = ['One Punch', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Hello']);

    /*const handleAdd = (e) => {

        setCategories(['Twin Peaks', ...categories, ]);

        //NO funciona con el push,
        //otra forma es:
        //el callback categories es el estado anterior. Devuelve el nuevo estado que es un nuevo arreglo con los valores anteriores mas el que agrego.
        //setCategories(categories => [...categories, 'Twin Peaks']);
    }*/



   

    return (
        <Fragment>
            <h1>GifExpertApp - Búsqueda de Gifs</h1>
            <AddCategory setCategories = {setCategories}/>
            <hr />

            <ol>
                { 
                    categories.map(category => (
                   
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                
                    ))
                }   
            </ol>     
        </Fragment>
    )
}



export default GifExpertApp;