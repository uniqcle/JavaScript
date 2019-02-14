const movie = {
    title: 'a', 
    releaseYear: 2018, 
    rating: 4.4, 
    director: 'b'

}; 


function showProperties(object){
    for(key in object){
        if(typeof object[key] == 'string'){
            console.log(key, object[key]);
        }
    }
}

showProperties(movie);