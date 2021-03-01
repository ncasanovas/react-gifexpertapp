import { Fragment, useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {


    const [inputValue, setInputValue] = useState('');
    
    //Actualiza el valor del input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //para evitar refrescar la pagina
        e.preventDefault();
        if(inputValue.trim().length > 2){
            //Con pasar setCategories ya tengo la referencia a categories
            setCategories( categories => [inputValue, ...categories]);
            setInputValue('');
        }
      
    }

    return (
        <Fragment>
            <h4>Ingrese la categoría y luego presione enter:</h4>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value= {inputValue}
                    onChange={ handleInputChange}
                />
            </form>
        </Fragment>
    )
    
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}