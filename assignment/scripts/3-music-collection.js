console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
let albumInfo = {title: title, artist: artist, yearPublished: yearPublished }
collection.push(albumInfo);
return albumInfo;
}


addToCollection('Victory Lap', 'Nipsey Hussle', '2018');
addToCollection('Pink Planet', 'Pink $weats', '2021');
addToCollection('Born Sinner', 'J.Cole', '2013');
addToCollection('Ugh, Those Feels Again', 'Snoh Aalegra', '2019');
addToCollection('The Man on the Moon: End of Day', 'Kid Cudi', '2009');
addToCollection('Funhouse Mirror', 'Marlon Craft', '2019');
console.log(collection);




