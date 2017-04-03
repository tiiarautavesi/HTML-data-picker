/* Ensimmäinen ratkaisu */

var myProfile = {
  "name":"Tiia",
  "gender":"Female",
  "music": ["Lisa Mitchell, Leevi and the Leavings, Michael Jackson"],
  "tv": ["Rakas, sinusta on tullut pullukka, MTV Uutiset, Karpolla on asiaa, Digimon"],
  "movies": ["Mr. Nobody, Matrix, Star Wars, Harry Potter"],
  "restaurants": ["Fuku, Hesburger, Itis Kebab, Morrison's"]
}

console.log(JSON.stringify(myProfile));

/* Toinen ratkaisu */

function createElementDotNotation() {
    var profile = {};
    profile.nimi = 'Tiia';
    profile.gender = 'Female';
    profile.music = ['Lisa Mitchell', 'Leevi and the Leavings', 'Michael Jackson'];
    profile.tv = ['Rakas, sinusta on tullut pullukka', 'MTV Uutiset', 'Karpolla on asiaa', 'Digimon'];
    profile.movies = ['Mr. Nobody', 'Matrix', 'Star Wars', 'Harry Potter'];
    profile.restaurants = ['Fuku', 'Hesburger', 'Itis Kebab', 'Morrison'];
    
    return profile;
}

var element1 = createElementDotNotation();
console.log(JSON.stringify(element1));
