let options = {
    height: 1000, 
    width: 2000, 
    name: 'Продукт',
}; 

options.bool = true; 
options.colors = {border: "red", bg: "blue"}; 

for(let key in options){
    console.log("Свойство " + key + " имеет значение " + options[key]); 
}

console.log(Object.keys(options).length); 

 