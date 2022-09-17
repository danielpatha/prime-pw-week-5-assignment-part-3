console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
    let albumInfo = {title: title, artist: artist, yearPublished: yearPublished}
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

function showCollection(newCollection){   
    console.log(newCollection.length);
    for (let i = 0; i < newCollection.length; i++){
        console.log(newCollection[i].title ,'by', newCollection[i].artist, ', published in',newCollection[i].yearPublished); 
    }
}
showCollection(collection);

function findByArtist(artist, array) {
    artistResults = [];
    for(let i = 0; i < array.length; i++){
         if(artist === array[i].artist){ 
        artistResults.push(array[i]);
       }
    }
    return artistResults;
}
        
//findByArtist('Nipsey Hussle',collection);

console.log('testing findByArtist', findByArtist('Marlon Craft', collection));


