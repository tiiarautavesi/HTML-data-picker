var fs = require('fs');
var path = require('path');

function parseHTML(html) {
    // poimi Friends-osan jälkeen tuleva teksti
    var htmlEndPart = html.split('<h2>Friends</h2><ul><li>')[1];
    //console.log(htmlEndPart);
    // poista loppuosa 
    var listItems = htmlEndPart.split('</li></ul>')[0];
    // käy läpi tekstipätkät joiden erottimina lista-elementit
    for (var row of listItems.split('</li><li>')) {
        // tulosta nimi 
        var info = {};
        info.nimi = row.split('(')[0].trim();
        info.date = {};
        info.date.paiva = row.split(' ')[2].slice(1, 3);
        info.date.kuukausi = row.split(' ')[3];
        info.date.vuosi = row.split(' ')[4].slice(0, 4);
        console.log(info.nimi+"\n"+"Liittyi ystäväksi "+info.date.paiva+" "+info.date.kuukausi+" "+info.date.vuosi);
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
parseFile('friends.htm');