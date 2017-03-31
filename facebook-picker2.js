var fs = require('fs');
var path = require('path');

function parseHTML(html) {
    // poimi Friends-osan jälkeen tuleva teksti
    var htmlEndPart = html.split('<th>Music</th><td>')[1];
    //console.log(htmlEndPart);
    // poista loppuosa 
    var listItems = htmlEndPart.split('</td></tr>')[0];
    // käy läpi tekstipätkät joiden erottimina lista-elementit
    for (var musiikki of listItems.split(', ')) {
        // tulosta nimi 
        console.log("Musiikki: "+musiikki);
    }
}

function parseHTML(html) {
    // poimi Music-otsikon jälkeen tuleva lista
    var htmlEndPart = html.split('<th>Music</th><td>')[1];
    var listItems = htmlEndPart.split('</td></tr>')[0];
    for (var musiikki of listItems.split(', ')) {
        // tulosta objektit
        console.log("Musiikki: "+musiikki);
    }
    // poimi Television-otsikon jälkeen tuleva lista
    var htmlEndPart = html.split('<th>Television</th><td>')[1];
    var listItems = htmlEndPart.split('</td></tr>')[0];
    for (var teevee of listItems.split(', ')) {
        // tulosta objektit 
        console.log("TV-sarjat: "+teevee);
    }
    // poimi Restaurants-otsikon jälkeen tuleva lista
    var htmlEndPart = html.split('<th>Restaurants</th><td>')[1];
    var listItems = htmlEndPart.split('</td></tr>')[0];
    for (var ravintola of listItems.split(', ')) {
        // tulosta objektit 
        console.log("Ravintolat: "+ravintola);
    }
}

function parseFile(filename) {
    var pathToFile = path.join(__dirname, filename);
    fs.readFile(pathToFile, 'utf8', function (err, txt) {
        if (err) {
            return console.log(err);
        }
        //console.log(txt); // printing here
        parseHTML(txt); //Parsi printattu teksti
    });
};
// prints content 
parseFile('profile.htm');