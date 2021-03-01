//Los helpers son funciones que hacen un cierto trabajo en específico. No hace falta que redibujen el state.

//Como es async esta función no regresa los gifs, sino una promesa que resuelve la coleccipon de los gifs.
export const getGifs = async(category) => {
   
    //encodeURI reemplaza los espacios
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=dFFCrdfC1fvOK2FRWutxSqeKuFBwrTo6`;
    const resp = await fetch(url);
    //Me interesa la data que viene dentro de esa data entonces hago desestructuración
    const {data} = await resp.json(); 

    const gifs = data.map( img => {

        return {
            id: img.id,
            title: img.title,
            //Si trae imagenes entonces que me muestre la medium
            url: img.images?.downsized_medium.url            }
    });

    return gifs;

}